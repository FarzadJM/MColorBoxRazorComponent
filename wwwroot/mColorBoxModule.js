export function addColorBox(element, _value, _readOnly, dotNetHelper, isRTLEnable) {
    const colorBox = $(element).dxColorBox({
        readOnly: _readOnly,
        value: _value,
        rtlEnabled: isRTLEnable,
        applyValueMode: 'useButtons',
        onValueChanged: function (e) {
            dotNetHelper.invokeMethodAsync('OnValueChanged', e.value);
        },
    }).dxColorBox('instance');

    return colorBox;
}

export function refresh(element) {
    if (element) {
        $(element).dxColorBox('instance').refresh();
    }
}

export function dispose(element) {
    if (element) {
        $(element).dxColorBox('dispose');
    }
}