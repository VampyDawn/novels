import { novels } from "./novels.js";

const novelsContainer = document.getElementById("novels");

const createNewNovel = (name, volumes, extras) => {
    let newNovel = document.createElement("Section");
    newNovel.classList.add("novel");

    let novelName = document.createTextNode(name);
    let newNovelName = document.createElement("h2");
    newNovelName.classList.add("novelName");
    newNovelName.appendChild(novelName);

    newNovel.appendChild(newNovelName);

    newNovel.appendChild(createNewTable(name, volumes));

    if (extras !== null) {
        newNovel.appendChild(createExtras(name, extras));
    }

    novelsContainer.appendChild(newNovel);
};

const createExtras = (name, extras) => {
    let container = document.createElement("div");
    for (var i = 0; i < extras.length; i++) {
        if (extras[i].type == "Series") {
            let titleNode = document.createTextNode(extras[i].name);
            let titleContainer = document.createElement("h3");
            titleContainer.classList.add("typeTitle");
            titleContainer.appendChild(titleNode);
            container.appendChild(titleContainer);
            container.appendChild(
                createNewTable(extras[i].name, extras[i].volumes)
            );
        }

        if (extras[i].type == "Extra") {
            let titleNode = document.createTextNode("Extra");
            let titleContainer = document.createElement("h3");
            titleContainer.classList.add("typeTitle");
            titleContainer.appendChild(titleNode);
            container.appendChild(titleContainer);
            container.appendChild(
                createNewTableExtras(name, extras[i].volumes)
            );
        }
    }
    return container;
};

const createNewTableExtras = (name, volumes) => {
    let newNovelTable = document.createElement("table");
    newNovelTable.classList.add("novelTable");
    newNovelTable.appendChild(createRowHeader());
    for (var i = 0; i < volumes.length; i++) {
        newNovelTable.appendChild(createNewDataRowExtra(name, volumes[i]));
    }
    return newNovelTable;
};

const createNewDataRowExtra = (name, volume) => {
    let volumeName = document.createTextNode(volume);

    let tableRowName = document.createElement("td");
    tableRowName.classList.add("novelRowData");
    tableRowName.appendChild(volumeName);

    let downloadBtnImage = document.createElement("img");
    downloadBtnImage.setAttribute("src", "./Download.svg");
    downloadBtnImage.setAttribute("alt", "Download");

    let url = "./Novels/" + name + "/" + volume + ".pdf";

    let downloadBtn = document.createElement("a");
    downloadBtn.setAttribute("href", url);
    downloadBtn.setAttribute("download", volume);

    downloadBtn.appendChild(downloadBtnImage);

    let tableRowDownload = document.createElement("td");
    tableRowDownload.classList.add("novelRowData", "downloadBtn");
    tableRowDownload.appendChild(downloadBtn);

    let row = document.createElement("tr");
    row.classList.add("novelRow");

    row.appendChild(tableRowName);
    row.appendChild(tableRowDownload);

    return row;
};

const createNewTable = (name, volumes) => {
    let newNovelTable = document.createElement("table");
    newNovelTable.classList.add("novelTable");
    newNovelTable.appendChild(createRowHeader());

    for (var i = 0; i < volumes; i++) {
        newNovelTable.appendChild(createNewDataRow(name, i + 1));
    }

    return newNovelTable;
};

const createRowHeader = () => {
    let newTableHeader = document.createElement("th");
    let newTableHeader2 = document.createElement("th");
    newTableHeader.classList.add("novelHeader");
    newTableHeader2.classList.add("novelHeader");
    let newTableHeaderRow = document.createElement("tr");
    newTableHeaderRow.classList.add("novelHeaderRow");
    newTableHeaderRow.appendChild(newTableHeader);
    newTableHeaderRow.appendChild(newTableHeader2);
    return newTableHeaderRow;
};

const createNewDataRow = (name, volume) => {
    let fixedName = "Volume " + volume;

    let volumeName = document.createTextNode(fixedName);

    let tableRowName = document.createElement("td");
    tableRowName.classList.add("novelRowData");
    tableRowName.appendChild(volumeName);

    let downloadBtnImage = document.createElement("img");
    downloadBtnImage.setAttribute("src", "./Download.svg");
    downloadBtnImage.setAttribute("alt", "Download");

    let url = "./Novels/" + name + "/Volume (" + volume + ").pdf";

    let downloadBtn = document.createElement("a");
    downloadBtn.setAttribute("href", url);
    downloadBtn.setAttribute("download", fixedName);

    downloadBtn.appendChild(downloadBtnImage);

    let tableRowDownload = document.createElement("td");
    tableRowDownload.classList.add("novelRowData", "downloadBtn");
    tableRowDownload.appendChild(downloadBtn);

    let row = document.createElement("tr");
    row.classList.add("novelRow");

    row.appendChild(tableRowName);
    row.appendChild(tableRowDownload);

    return row;
};

for (var i = 0; i < novels.length; i++) {
    createNewNovel(novels[i].name, novels[i].volumes, novels[i].extras);
}
