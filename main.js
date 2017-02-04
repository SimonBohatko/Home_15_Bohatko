var i = 0;
//////////////////////////////////////////////Проверка путей и перемещение
function westWay() {
    if (west(isFree) == true) {
        while (west(isFree) == true) {
            west(i);
            i++;
        }
    }
}

function southWay() {
    if (south(isFree) == true) {
        while (south(isFree) == true) {
            south(i);
            i++;
        }
    }
}

function eastWay() {
    if (east(isFree) == true) {
        while (east(isFree) == true) {
            east(i);
            i++;
        }
    }

}

function northWay() {
    if (north(isFree) == true) {
        while (north(isFree) == true) {
            north(i);
            i++;
        }
    }
}
////////////////////////////////////////////Первый и второй уровень
northWay();
eastWay();

//Третий и четвертый уровень
for (f = 0; f < 12; f++) {
    southWay();
    eastWay();
}


/////////////////////////////////////////////Пятый уровень (и вообще любой лабиринт, который без тупиков)
var i = 0, from = '', to = '';
do {
    if (isFree('north') == true && from != 'south') {
        from = 'north';
        to = north();

    }
    else if (isFree('east') == true && from != 'west') {
        from = 'east';
        to = east();
    }
    else if (isFree('south') == true && from != 'north') {
        from = 'south';
        to = south();
    }
    else {
        from = 'west';
        to = west();
    }
} while (to != 'next');


//////////////////////////////////////////////////////////5 лабиринтов за раз
var i = 0, from = '', to = '';
for (; i < 5; i++) {
    do {
        if (isFree('north') == true && from != 'south') {
            from = 'north';
            to = north();

        }
        else if (isFree('east') == true && from != 'west') {
            from = 'east';
            to = east();
        }
        else if (isFree('south') == true && from != 'north') {
            from = 'south';
            to = south();
        }
        else {
            from = 'west';
            to = west();
        }
    } while (to != 'next');
}