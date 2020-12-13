// <div id="slider"></div>
const rangeSliderDistance = document.getElementById('range-slider-distance');
if(rangeSliderDistance){
    noUiSlider.create(rangeSliderDistance, {
        start: [0, 10],
        connect: true,
        step: 1,
        range: {
            'min': [0],
            'max': [10]
        }
    });

    const input0 = document.getElementById('input-0');
    const input1 = document.getElementById('input-1');
    const inputsDistance = [input0, input1];

    rangeSliderDistance.noUiSlider.on('update', function(values, handel){
        inputsDistance[handel].value = Math.round(values[handel]);
    });

    const setRangeSlider = (i, value) =>{
        let arr = [null, null];
        arr[i] = value;
        rangeSliderDistance.noUiSlider.set(arr);
    };

    inputsDistance.forEach((el,index) =>{
        el.addEventListener('change', (e) =>{
            setRangeSlider(index, e.currentTarget.value);
        });
    });
}
// <div id="slider"></div>
const rangeSliderRooms = document.getElementById('range-slider-rooms');
if(rangeSliderRooms){
    noUiSlider.create(rangeSliderRooms, {
        start: [1, 6],
        connect: true,
        step: 1,
        range: {
            'min': [1],
            'max': [6]
        }
    });

    const input2 = document.getElementById('input-2');
    const input3 = document.getElementById('input-3');
    const inputsRooms = [input2, input3];

    rangeSliderRooms.noUiSlider.on('update', function(values, handel){
        inputsRooms[handel].value = Math.round(values[handel]);
    });

    const setRangeSlider = (i, value) =>{
        let arr = [null, null];
        arr[i] = value;
        rangeSliderRooms.noUiSlider.set(arr);
    };

    inputsRooms.forEach((el,index) =>{
        el.addEventListener('change', (e) =>{
            setRangeSlider(index, e.currentTarget.value);
        });
    });
}

const rangeSlider = document.getElementById('range-slider');
if(rangeSlider){
    noUiSlider.create(rangeSlider, {
        start: [500, 999999],
        connect: true,
        step: 500,
        range: {
            'min': [500],
            'max': [999999]
        }
    });
    
    const input4 = document.getElementById('input-4');
    const input5 = document.getElementById('input-5');
    const inputsPrice = [input4, input5];

    rangeSlider.noUiSlider.on('update', function(values, handel){
        inputsPrice[handel].value = Math.round(values[handel]);
    });

    const setRangeSlider = (i, value) =>{
        let arr = [null, null];
        arr[i] = value;
        rangeSlider.noUiSlider.set(arr);
    };

    inputsPrice.forEach((el,index) =>{
        el.addEventListener('change', (e) =>{
            setRangeSlider(index, e.currentTarget.value);
        });
    });
}

