export interface OptionItem {
  label: string;
  value: string;
  disabled?: boolean;
  item?: unknown;
}

export interface MenuItem {
  label: string;
  path: string;
  Icon?: React.ReactNode;
  badge?: { value?: number; label?: string };
}

export interface BaseControlledInput {
  value?: string;
  onChange?: (value: string) => void;
}

export interface BaseControlledCheckbox {
  checked?: boolean;
  onChange?: () => void;
}

export interface BaseUncontrolledInput {
  name: string;
  label?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
}
