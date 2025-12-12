# RealGrid Bug Demo: Fit Layout with Fixed Width Column

`[...]` 버튼이 있는 `option` 컬럼 사이즈가 Grid 너비에 따라 변동됩니다.

```tsx
const column = [
  { name: "eqpId", fieldName: "EQP_ID", header: { text: "EQP ID" }, autoFilter: true },
  // option 컬럼: `fillWidth: 0` 으로 두어 너비가 FILL에서 제외되어야 하나 그렇게 동작 안함.
  {
    name: "option",
    fieldName: "_option",
    header: { text: "  ", styleName: "rg-cell-button-only" },
    width: 28,
    button: "action",
    popupMenu: "menu1",
    buttonVisibility: "always",
    fillWidth: 0,
    resizable: false,
    styleName: "rg-cell-button-only",
  },
  { name: "unit", fieldName: "UNIT", header: { text: "Chamber" }, autoFilter: true },
  { name: "lotId", fieldName: "LOT_ID", header: { text: "Lot ID" } },
]
```

![](./assets/images/rg-fit-with-fix-bug.gif)
