let table = document.querySelector("table");

// 1. Activate all members
activate.addEventListener("click", AllCheck);

function AllCheck() {
    let itemList = document.querySelectorAll(".status");
    let activateButton = document.querySelector("#activate");
    let deactivateButton = document.querySelector("#deactivate");
    for (const item of itemList) {
        if (item.checked == false) {
            item.checked = true;
        }
    }
    activateButton.style.display = "none";
    deactivateButton.style.display = "inline-block";
}

// 2. Change all check/uncheck
changeActivate.addEventListener("click", ChangeActivate);

function ChangeActivate() {
    let itemList = document.querySelectorAll(".status");
    for (const item of itemList) {
        if (item.checked == false) {
            item.checked = true;
        }
        else {
            item.checked = false;
        }
    }
}

// 3. Deactivate all members
deactivate.addEventListener("click", AllUncheck);

function AllUncheck() {
    let itemList = document.querySelectorAll(".status");
    let activateButton = document.querySelector("#activate");
    let deactivateButton = document.querySelector("#deactivate");
    for (const item of itemList) {
        if (item.checked == true) {
            item.checked = false;
        }
    }
    deactivateButton.style.display = "none";
    activateButton.style.display = "inline-block";
}

// 4. Enable or disable table stripes
switchStripes.addEventListener("click", SwitchStripes);
function SwitchStripes() {
    let switchStripesButton = document.querySelector("#switchStripes");
    if (table.classList.contains("table-striped")) {
        table.classList.remove("table-striped");
        switchStripesButton.classList.replace("btn-secondary", "btn-primary");
        switchStripesButton.value = "Táblázat sávozásának bekapcsolása";
    }
    else {
        table.classList.add("table-striped");
        switchStripesButton.classList.replace("btn-primary", "btn-secondary");
        switchStripesButton.value = "Táblázat sávozásának kikapcsolása";
    }
}

// 5. Switch between dark and light modes
switchMode.addEventListener("click", SwitchMode);

function SwitchMode() {
    let switchModeButton = document.querySelector("#switchMode");
    if (table.classList.contains("table-dark")) {
        table.classList.remove("table-dark");
        switchModeButton.value = "Sötét mód bekapcsolása";
        switchModeButton.classList.replace("btn-light", "btn-dark");
    }
    else {
        table.classList.add("table-dark");
        switchModeButton.value = "Világos mód bekapcsolása";
        switchModeButton.classList.replace("btn-dark", "btn-light");
    }
}

// 6. Switch on/off borders
switchBorder.addEventListener("click", SwitchBorders);

function SwitchBorders() {
    let switchBorderButton = document.querySelector("#switchBorder");
    if (table.classList.contains("table-bordered")) {
        table.classList.remove("table-bordered");
        table.classList.add("table-borderless");
        switchBorderButton.classList.remove("btn-info");
        switchBorderButton.classList.add("btn-secondary");
        switchBorderButton.value = "Szegélyek bekapcsolása";
    }
    else {
        table.classList.remove("table-borderless");
        table.classList.add("table-bordered");
        switchBorderButton.classList.remove("btn-secondary");
        switchBorderButton.classList.add("btn-info");
        switchBorderButton.value = "Szegélyek kikapcsolása";
    }
}

// 7. Switch between small/normal line height
switchSM.addEventListener("click", SwitchSM);

function SwitchSM() {
    let switchSMButton = document.querySelector("#switchSM");
    if (table.classList.contains("table-sm")) {
        table.classList.remove("table-sm");
        switchSMButton.classList.remove("btn-danger");
        switchSMButton.classList.add("btn-success");
        switchSMButton.value = "Kisebb sormagasság";
    }
    else {
        table.classList.add("table-sm");
        switchSMButton.classList.remove("btn-success");
        switchSMButton.classList.add("btn-danger");
        switchSMButton.value = "Nagyobb sormagasság";
    }
}

// 8. Change table color
tableColor.addEventListener("click", TableColor);

function TableColor() {
    let selectedColor = document.querySelector("#tableColor").value;
    let tableColors = [
        "table-primary",
        "table-secondary",
        "table-success",
        "table-danger",
        "table-warning",
        "table-info",
        "table-light",
        "table-dark"
    ];

    for (const color of tableColors) {
        if (table.classList.contains(color)) {
            table.classList.remove(color);
        }
    }
    table.classList.add(selectedColor);
}

// 9. Add new line

submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e);

    const form = document.querySelector("form");

    if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
    }

    AddNewLine();

    form.reset();
    form.classList.remove("was-validated");
});

function AddNewLine() {
    let newLine = table.insertRow();
    let surnameCell = newLine.insertCell(0);
    let lastnameCell = newLine.insertCell(1);
    let emailCell = newLine.insertCell(2);
    let telCell = newLine.insertCell(3);
    let jobTitleCell = newLine.insertCell(4);
    let activateCell = newLine.insertCell(5);
    surnameCell.innerHTML = document.querySelector("#surname").value;
    lastnameCell.innerHTML = document.querySelector("#lastname").value;;
    emailCell.innerHTML = document.querySelector("#email").value;
    telCell.innerHTML = document.querySelector("#tel").value;
    jobTitleCell.innerHTML = document.querySelector("#jobTitle").value;;
    activateCell.innerHTML = '<input type="checkbox" class="status">';
}

// 10. Add new testline

testLine.addEventListener("click", newTestLine);

function newTestLine() {
    let newLine = table.insertRow();
    let surnameCell = newLine.insertCell(0);
    let lastnameCell = newLine.insertCell(1);
    let emailCell = newLine.insertCell(2);
    let telCell = newLine.insertCell(3);
    let jobTitleCell = newLine.insertCell(4);
    let activateCell = newLine.insertCell(5);
    surnameCell.innerHTML = "teszt";
    lastnameCell.innerHTML = "teszt";
    emailCell.innerHTML = "teszt";
    telCell.innerHTML = "teszt";
    jobTitleCell.innerHTML = "teszt";
    activateCell.innerHTML = '<input type="checkbox" class="status">';
}

// 11. Form validation
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }
        form.classList.add('was-validated')
        }, false)
    })
})()

// 12. Telefonnumber validity
const telInput = document.querySelector("#tel");
telInput.addEventListener("input", TelValid);

function TelValid() {
    if (telInput.validity.patternMismatch) {
        telInput.setCustomValidity("A formátum legyen: 123-4567");
    }
    else {
        telInput.setCustomValidity("");
    }
}
