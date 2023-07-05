import { RowID, RowElelement } from './interface';

// Type declarations for each crud function
export function insertRow(row: RowElement): number;

export function deleteRow(rowId: RowID): void;

export function updateRow(rowId: RowID, row: RowElement): number;
