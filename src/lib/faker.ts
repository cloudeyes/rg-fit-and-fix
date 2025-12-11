import { ValueType, type DataField } from "realgrid";

export type RealGridColumnConfig = Record<string, unknown> & {
  header?: Record<string, unknown>;
};

const cloneColumnConfig = (column: RealGridColumnConfig): RealGridColumnConfig => ({
  ...column,
  header: column.header ? { ...column.header } : undefined,
});

export type LotListRow = {
  LOT_ID: string;
  LINE: string;
  AREA: string;
  SDWT: string;
  EQP_MODEL: string;
  FDC_MODEL: string;
  EQP_ID: string;
  UNIT: string;
  PRODUCT: string;
  ROUTE: string;
  STEP_SEQ: string;
  START_TIME: string;
  END_TIME: string;
  STATUS: string;
  WAFER_QTY: number;
};

const LOT_LIST_TEMPLATE: LotListRow[] = [
  {
    LOT_ID: "LOT-2401",
    LINE: "L01",
    AREA: "FAB-A",
    SDWT: "Atlas Guardians",
    EQP_MODEL: "ETCH-100",
    FDC_MODEL: "BASELINE",
    EQP_ID: "EQP-A01",
    UNIT: "CH-01",
    PRODUCT: "PRD-ALPHA",
    ROUTE: "ETCH > CLEAN",
    STEP_SEQ: "030",
    START_TIME: "2024-10-01 09:15",
    END_TIME: "2024-10-01 10:05",
    STATUS: "Processing",
    WAFER_QTY: 25,
  },
  {
    LOT_ID: "LOT-2402",
    LINE: "L01",
    AREA: "FAB-A",
    SDWT: "Helios Vanguard",
    EQP_MODEL: "ETCH-100",
    FDC_MODEL: "ENHANCED",
    EQP_ID: "EQP-A02",
    UNIT: "CH-02",
    PRODUCT: "PRD-BETA",
    ROUTE: "ETCH > DRY",
    STEP_SEQ: "045",
    START_TIME: "2024-10-01 11:20",
    END_TIME: "2024-10-01 12:10",
    STATUS: "Completed",
    WAFER_QTY: 25,
  },
  {
    LOT_ID: "LOT-2410",
    LINE: "L02",
    AREA: "FAB-B",
    SDWT: "Orion Taskforce",
    EQP_MODEL: "ETCH-200",
    FDC_MODEL: "BASELINE",
    EQP_ID: "EQP-B05",
    UNIT: "CH-05",
    PRODUCT: "PRD-GAMMA",
    ROUTE: "ETCH > ASH",
    STEP_SEQ: "018",
    START_TIME: "2024-10-02 03:10",
    END_TIME: "2024-10-02 04:05",
    STATUS: "Hold",
    WAFER_QTY: 13,
  },
  {
    LOT_ID: "LOT-2411",
    LINE: "L03",
    AREA: "FAB-C",
    SDWT: "Nova Makers",
    EQP_MODEL: "ETCH-200",
    FDC_MODEL: "ENHANCED",
    EQP_ID: "EQP-B05",
    UNIT: "CH-05",
    PRODUCT: "PRD-DELTA",
    ROUTE: "CLEAN > ETCH",
    STEP_SEQ: "052",
    START_TIME: "2024-10-03 08:40",
    END_TIME: "2024-10-03 09:25",
    STATUS: "Processing",
    WAFER_QTY: 20,
  },
  {
    LOT_ID: "LOT-2415",
    LINE: "L02",
    AREA: "FAB-B",
    SDWT: "Pioneer Collective",
    EQP_MODEL: "ETCH-100",
    FDC_MODEL: "BASELINE",
    EQP_ID: "EQP-A02",
    UNIT: "CH-02",
    PRODUCT: "PRD-EPSILON",
    ROUTE: "ETCH > CMP",
    STEP_SEQ: "060",
    START_TIME: "2024-10-03 12:00",
    END_TIME: "2024-10-03 12:45",
    STATUS: "Completed",
    WAFER_QTY: 25,
  },
];

const LOT_LIST_COLUMNS = [
  { name: "eqpId", fieldName: "EQP_ID", header: { text: "EQP ID" }, autoFilter: true },
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
  { name: "line", fieldName: "LINE", header: { text: "Line" }, autoFilter: true },
  { name: "area", fieldName: "AREA", header: { text: "Area" }, autoFilter: true },
  { name: "sdwt", fieldName: "SDWT", header: { text: "SDWT" }, autoFilter: true },
  { name: "eqpModel", fieldName: "EQP_MODEL", header: { text: "EQP Model" }, autoFilter: true },
  { name: "fdcModel", fieldName: "FDC_MODEL", header: { text: "FDC Model" }, autoFilter: true },
  // { name: "product", fieldName: "PRODUCT", header: { text: "Product" } },
  // { name: "route", fieldName: "ROUTE", header: { text: "Route" } },
  // { name: "step", fieldName: "STEP_SEQ", header: { text: "Step Seq" } },
  { name: "startTime", fieldName: "START_TIME", header: { text: "Start Time" } },
  { name: "endTime", fieldName: "END_TIME", header: { text: "End Time" } },
  { name: "status", fieldName: "STATUS", header: { text: "Status" } },
  { name: "waferQty", fieldName: "WAFER_QTY", header: { text: "Wafer Qty" } },
] satisfies RealGridColumnConfig[];

const LOT_LIST_FIELDS: DataField[] = [
  { fieldName: "LOT_ID", dataType: ValueType.TEXT },
  { fieldName: "LINE", dataType: ValueType.TEXT },
  { fieldName: "AREA", dataType: ValueType.TEXT },
  { fieldName: "SDWT", dataType: ValueType.TEXT },
  { fieldName: "EQP_MODEL", dataType: ValueType.TEXT },
  { fieldName: "FDC_MODEL", dataType: ValueType.TEXT },
  { fieldName: "EQP_ID", dataType: ValueType.TEXT },
  { fieldName: "UNIT", dataType: ValueType.TEXT },
  { fieldName: "PRODUCT", dataType: ValueType.TEXT },
  { fieldName: "ROUTE", dataType: ValueType.TEXT },
  { fieldName: "STEP_SEQ", dataType: ValueType.TEXT },
  { fieldName: "START_TIME", dataType: ValueType.TEXT },
  { fieldName: "END_TIME", dataType: ValueType.TEXT },
  { fieldName: "STATUS", dataType: ValueType.TEXT },
  { fieldName: "WAFER_QTY", dataType: ValueType.NUMBER },
];

const DEFAULT_LOT_ROW_COUNT = 40;
const LOT_STATUS_CYCLE = ["Processing", "Completed", "Hold", "Waiting"] as const;
const SDWT_TEAM_NAMES = [
  "Atlas Guardians",
  "Helios Vanguard",
  "Orion Taskforce",
  "Nova Makers",
  "Pioneer Collective",
  "Quantum Builders",
  "Vertex Crew",
  "Sentinel Forge",
] as const;

const formatDateTime = (date: Date) => {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const mi = String(date.getMinutes()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd} ${hh}:${mi}`;
};

const toDate = (value: string): Date | null => {
  const normalized = `${value.replace(" ", "T")}:00`;
  const date = new Date(normalized);
  return Number.isNaN(date.getTime()) ? null : date;
};

const shiftDateTime = (value: string, offsetMinutes: number) => {
  const date = toDate(value);
  if (!date) return value;
  date.setMinutes(date.getMinutes() + offsetMinutes);
  return formatDateTime(date);
};

const buildLotId = (lotId: string, sequence: number) => {
  const base = lotId.replace(/-\d+$/, "");
  return `${base}-${String(sequence + 1).padStart(2, "0")}`;
};

const adjustWaferQty = (qty: number, sequence: number) => Math.max(1, qty + ((sequence % 5) - 2));
const deriveSdwtTeam = (index: number): string =>
  SDWT_TEAM_NAMES[(index * 7 + 3) % SDWT_TEAM_NAMES.length]!;

type LotEquipmentProfile = Pick<LotListRow, "LINE" | "AREA" | "EQP_MODEL" | "FDC_MODEL" | "EQP_ID" | "UNIT">;

const LOT_EQUIPMENT_PROFILES: LotEquipmentProfile[] = [
  {
    LINE: "L01",
    AREA: "FAB-A",
    EQP_MODEL: "ETCH-100",
    FDC_MODEL: "BASELINE",
    EQP_ID: "EQP-A01",
    UNIT: "CH-01",
  },
  {
    LINE: "L01",
    AREA: "FAB-A",
    EQP_MODEL: "ETCH-100",
    FDC_MODEL: "ENHANCED",
    EQP_ID: "EQP-A02",
    UNIT: "CH-02",
  },
  {
    LINE: "L02",
    AREA: "FAB-B",
    EQP_MODEL: "ETCH-200",
    FDC_MODEL: "BASELINE",
    EQP_ID: "EQP-B05",
    UNIT: "CH-05",
  },
  {
    LINE: "L03",
    AREA: "FAB-C",
    EQP_MODEL: "ETCH-200",
    FDC_MODEL: "ENHANCED",
    EQP_ID: "EQP-B05",
    UNIT: "CH-05",
  },
];

const deriveEquipmentProfile = (index: number): LotEquipmentProfile => {
  const len = LOT_EQUIPMENT_PROFILES.length;
  if (len === 0) {
    throw new Error("LOT_EQUIPMENT_PROFILES must contain at least one profile");
  }
  const idx = index % len;
  return LOT_EQUIPMENT_PROFILES[idx]!;
};

export type LotListRowOptions = {
  rows?: LotListRow[];
  rowCount?: number;
};

export function createLotListRows(options?: LotListRow[] | LotListRowOptions): LotListRow[] {
  const resolvedOptions: LotListRowOptions = Array.isArray(options)
    ? { rows: options, rowCount: options.length }
    : options ?? {};
  const hasCustomRows = Array.isArray(resolvedOptions.rows) && resolvedOptions.rows.length > 0;
  const rows = hasCustomRows ? (resolvedOptions.rows as LotListRow[]) : LOT_LIST_TEMPLATE;
  const { rowCount = DEFAULT_LOT_ROW_COUNT } = resolvedOptions;
  const shouldDistributeEquipment = !hasCustomRows;

  const targetCount = Math.max(rowCount, rows.length);
  const result: LotListRow[] = [];

  for (let index = 0; index < targetCount; index += 1) {
    const template = rows[index % rows.length]!;
    const nextRow: LotListRow = {
      ...template,
      LOT_ID: buildLotId(template.LOT_ID, index),
      SDWT: deriveSdwtTeam(index),
      START_TIME: shiftDateTime(template.START_TIME, index * 11),
      END_TIME: shiftDateTime(template.END_TIME, index * 11 + 5),
      STATUS: LOT_STATUS_CYCLE[index % LOT_STATUS_CYCLE.length] ?? template.STATUS,
      WAFER_QTY: adjustWaferQty(template.WAFER_QTY, index),
    };

    if (shouldDistributeEquipment) {
      const equipment = deriveEquipmentProfile(index);
      nextRow.LINE = equipment.LINE;
      nextRow.AREA = equipment.AREA;
      nextRow.EQP_MODEL = equipment.EQP_MODEL;
      nextRow.FDC_MODEL = equipment.FDC_MODEL;
      nextRow.EQP_ID = equipment.EQP_ID;
      nextRow.UNIT = equipment.UNIT;
    }

    result.push(nextRow);
  }

  return result;
}

export function createLotListColumns(columns: RealGridColumnConfig[] = LOT_LIST_COLUMNS): RealGridColumnConfig[] {
  return columns.map((column) => cloneColumnConfig(column));
}

export function createLotListFields(fields: DataField[] = LOT_LIST_FIELDS): DataField[] {
  return fields.map((field) => ({ ...field }));
}
