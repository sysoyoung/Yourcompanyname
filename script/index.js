function slider(direction) {
    let classArr = ['first', 'second', 'third', 'fourth', 'fifth'];

    let direc;

    if (direction == 'right') {
        direc = 1;
    } else {
        direc = -1;
    }

    for (i = 0; i < classArr.length; i++) {

        let elem = document.querySelectorAll(`.${classArr[i]}`);
        if (elem.length == 2) {
            let first = elem[0].hasAttribute('first');
            let last = elem[1].hasAttribute('last');
            if ((first && (last && direction == 'right') || (!last && direction == 'left')) || (!first && last && direction == 'left')) {
                elem = elem[0];
            } else {
                elem = elem[1];
            }
        } else {
            elem = elem[0];
        }
        elem.classList.remove(`${classArr[i]}`);
        if (i + direc < 0) {
            elem.classList.add(`${classArr[classArr.length - 1]}`);
        } else {
            if (i + direc == classArr.length) {
                elem.classList.add(`${classArr[0]}`);
            } else {
                elem.classList.add(`${classArr[i+direc]}`);
            }
        }
    }
}

function sliderSize() {
    if (document.documentElement.clientWidth <= 1024) {
        let elem = document.querySelector('#one');
        elem.style.display = 'none';
    }
    if (document.documentElement.clientWidth <= 750) {
        let elem = document.querySelector('#two');
        elem.style.display = 'none';
    }
    if (document.documentElement.clientWidth <= 480) {
        let elem = document.querySelector('#three');
        elem.style.display = 'none';
    }
    if (document.documentElement.clientWidth > 1024) {
        let elem = document.querySelector('#one');
        elem.style.display = 'block';
    }
    if (document.documentElement.clientWidth > 750) {
        let elem = document.querySelector('#two');
        elem.style.display = 'block';
    }
    if (document.documentElement.clientWidth > 480) {
        let elem = document.querySelector('#three');
        elem.style.display = 'block';
    }
}

function menuCheck() {
    if (document.documentElement.clientWidth <= 823) {
        document.querySelector('.menu-list').style.display = 'none';
    } else {
        document.querySelector('.menu-list').style.display = 'flex';
    }
}

function openMenu() {
    let elem = document.querySelector('.menu-list');
    if (document.documentElement.clientWidth > 823) {
        return;
    }
    if (elem.style.display == 'none') {
        elem.style.display = 'flex';
    } else {
        elem.style.display = 'none';
    }
}

function checkForm(event) {

    let name = document.querySelector('#form-name');
    let category = document.querySelector('#form-category');
    let phone = document.querySelector('#form-phone');
    let city = document.querySelector('#form-city');
    let email = document.querySelector('#form-email');
    let err = true


    if (name.value == '') {
        name.style.borderColor = 'red';
        setTimeout(() => name.removeAttribute('style'), 3000);
        err = false;
    }

    if (category.value == '') {
        category.style.borderColor = 'red';
        setTimeout(() => category.removeAttribute('style'), 3000);
        err = false;
    }

    let phoneReg = /^\d[\d\(\)\ -]{8,13}\d$/;
    if (phoneReg.test(phone.value) == false) {
        phone.style.borderColor = 'red';
        setTimeout(() => phone.removeAttribute('style'), 3000);
        err = false;
    }

    if (city.value == '') {
        city.style.borderColor = 'red';
        setTimeout(() => city.removeAttribute('style'), 3000);
        err = false;
    }

    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email.value) == false) {
        email.style.borderColor = 'red';
        setTimeout(() => email.removeAttribute('style'), 3000);
        err = false;
    }

    if (!err) {
        event.preventDefault();
        return err;
    }
    return err;
}