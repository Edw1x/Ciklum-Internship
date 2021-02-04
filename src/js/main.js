import '../main.scss';
import '../index.html'

class eventClass {
    constructor(event_name, member_name, event_day, event_time, event_id) {
        this.event_name = event_name;
        this.member_name = member_name;
        this.event_day = event_day;
        this.event_time = event_time;
        this.event_id = event_id;
    }
}

var counter = -1;
var arr = []
var check = false;

window.newEvent = function () {
    let el = document.getElementById("new_event");
    let cal = document.getElementById("schedule");

    if (el.style.display == "none") {
        el.style.display = "flex";
        cal.style.display = "none";
    } else {
        el.style.display = "none";
        cal.style.display = "block"
    }
}

window.onSelect = function () {
    let member_choose = document.getElementById("members_pick").value;
    if (member_choose !== "All") {
        let new_arr = arr.filter(item => { return item.member_name !== member_choose })
        let needed_arr = arr.filter(item => { return item.member_name == member_choose })
        console.log(new_arr)
        for (let i = 0; i < new_arr.length; i++) {
            let el = document.getElementById(`cell_id_${new_arr[i].event_id}`);
            el.style.visibility = "hidden"
            el.parentNode.style.color = "white"
            el.parentNode.style.backgroundColor = "white"
        }
        for (let i = 0; i < needed_arr.length; i++) {
            let el = document.getElementById(`cell_id_${needed_arr[i].event_id}`);
            el.style.visibility = "visible"
            el.parentNode.style.color = "black"
            el.parentNode.style.backgroundColor = "#d9f3bb"
        }
    } else {
        console.log(arr)
        for (let i = 0; i < arr.length; i++) {
            let el = document.getElementById(`cell_id_${arr[i].event_id}`);
            el.style.visibility = "visible"
            el.parentNode.style.color = "black"
            el.parentNode.style.backgroundColor = "#d9f3bb"
            el.parentNode.parentNode.border = "2px solid #c4c4c4"
        }
    }
}

window.deleteCell = function (id) {
    let el = document.getElementById(`cell_id_${id}`);
    let event_name = el.getAttribute("name");
    if (confirm(`Are you sure you want to delete "${event_name}" event?`)) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i].event_id, id)
            if (arr[i].event_id == id) {
                arr.splice(i, 1);
                el.parentNode.style.backgroundColor = "#fff";
                el.parentNode.outerHTML = "<td></td>";
            }
        }
    }
}

window.getData = function () {
    const days_map = new Map();
    days_map.set("Monday", 1);
    days_map.set("Tuesday", 2);
    days_map.set("Wednesday", 3);
    days_map.set("Thursday", 4);
    days_map.set("Friday", 5);

    console.log();

    let get_event_name = document.getElementById("event_name").value;
    let get_members = document.getElementById("members").value;
    let get_days = document.getElementById("days").value;
    let get_time = document.getElementById("time").value;

    let get_row = document.getElementById(get_time);
    let cell_number = days_map.get(get_days);

    counter++;
    console.log(counter)
    let created_event = new eventClass(get_event_name, get_members, get_days, get_time, counter);

    if (arr.length == 0) {
        arr.push(created_event);
        get_row.children[cell_number].style.backgroundColor = "#d9f3bb";
        get_row.children[cell_number].innerHTML =
            get_event_name +
            `<span class="close" name="${get_event_name}" id="cell_id_${counter}" onclick="deleteCell(${counter})">x</span>`;
        newEvent();
    }
    else {

        check = false;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].event_day == created_event.event_day && arr[i].event_time == created_event.event_time) {
                alert("cant create, the event on this is already booked");
                newEvent();
                check = true;
                break;
            }
        }

        console.log(check)
        if (check != true) {
            console.log("we are in else");
            arr.push(created_event);
            get_row.children[cell_number].style.backgroundColor = "#d9f3bb";
            get_row.children[cell_number].innerHTML =
                get_event_name +
                `<span class="close" name="${get_event_name}" id="cell_id_${counter}" onclick="deleteCell(${counter})">x</span>`;

            newEvent();
        }
    }

}