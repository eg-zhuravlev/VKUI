import React from 'react';
import { OS } from '../lib/platform';

export type HorizontalAlign = 'left' | 'center' | 'right';

export interface ObjectClassNames {
  [index: string]: boolean;
}

export interface InsetsInterface {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export interface DangerInnerHTML {
  __html: string;
}

/* TODO: избавиться от этого интерфейса, className уже есть в HTMLAttributes */
export interface HasClassName {
  className?: string | number | ObjectClassNames;
}

/* TODO: избавиться от этого интерфейса, className уже есть в HTMLAttributes */
export interface HasStyleObject {
  style?: React.CSSProperties;
}

/* TODO: избавиться от этого интерфейса, className уже есть в HTMLAttributes */
export interface HasChildren {
  children?: React.ReactNode;
}

export interface HasPlatform {
  /**
   * @ignore
   */
  platform?: OS;
}

export interface HasInsets {
  /**
   * @ignore
   */
  insets?: InsetsInterface;
}

export type OldRef<T> = (el: T) => void;

export interface RefWithCurrent<T> {
  current: T | null;
}

export interface HasRootRef<T> {
  getRootRef?: OldRef<T> | RefWithCurrent<T>;
}

export interface HasRef<T> {
  getRef?: OldRef<T> | RefWithCurrent<T>;
}

export interface HasDangerHTML {
  dangerouslySetInnerHTML?: DangerInnerHTML;
}

export interface HasFormStatus {
  status?: 'default' | 'error' | 'valid';
}

export interface HasAlign {
  align?: HorizontalAlign;
}
