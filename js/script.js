
import tabs from'./modules/tabs';
import forms from'./modules/forms';
import slider from'./modules/slider';
import timer from'./modules/timer';
import modal from'./modules/modal';
import cards from'./modules/cards';
import calc from './modules/calc';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {
         
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
        slide: '.offer__slide'
    });
    timer('.timer', '2022-05-20');
    modal('[data-modal]', '.modal', modalTimerId);
    cards();
})