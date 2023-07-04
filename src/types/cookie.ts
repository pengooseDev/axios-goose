export type getterNameProps = string;
export type getterReturn = string | null;

export type setterNameProps = string;
export type setterValueProps = string;
export interface setterOptionProps {
  expires?: Date;
  path?: string;
  domain?: string;
  secure?: string;
  sameSite?: 'None' | 'Lax' | 'Strict';
}
export type setterReturn = void;
