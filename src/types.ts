import * as React from 'react';
import { PlatformType } from './lib/platform';
import { Insets } from '@vkontakte/vk-bridge';

export type AnyFunction = (...args: any[]) => any;

export type AlignType = 'left' | 'center' | 'right';

export interface HasRootRef<T> {
  getRootRef?: React.Ref<T>;
}

export interface HasRef<T> {
  getRef?: React.Ref<T>;
}

export interface HasAlign {
  align?: AlignType;
}

export interface HasPlatform {
  /**
   * @ignore
   */
  platform?: PlatformType;
}

export interface HasInsets {
  /**
   * @ignore
   */
  insets?: Partial<Insets>;
}

export type { Version } from './lib/browser';
