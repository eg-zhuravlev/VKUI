import * as React from "react";
import { classNames } from "../../lib/classNames";
import { FormField } from "../FormField/FormField";
import { HasRef, HasRootRef } from "../../types";
import { getClassName } from "../../helpers/getClassName";
import { useEnsuredControl } from "../../hooks/useEnsuredControl";
import { useExternRef } from "../../hooks/useExternRef";
import { usePlatform } from "../../hooks/usePlatform";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import "./Textarea.css";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HasRef<HTMLTextAreaElement>,
    HasRootRef<HTMLElement> {
  grow?: boolean;
  onResize?(el: HTMLTextAreaElement): void;
  defaultValue?: string;
}

const Textarea: React.FC<TextareaProps> = React.memo(
  ({
    defaultValue = "",
    grow = true,
    style,
    onResize,
    className,
    getRootRef,
    getRef,
    rows = 2,
    ...restProps
  }: TextareaProps) => {
    const [value, onChange] = useEnsuredControl(restProps, { defaultValue });
    const currentScrollHeight = React.useRef<number>();
    const elementRef = useExternRef(getRef);
    const platform = usePlatform();
    const { sizeY } = useAdaptivity();

    // autosize input
    React.useEffect(() => {
      const el = elementRef.current;

      if (grow && el?.offsetParent) {
        el.style.height = "";
        el.style.height = `${el.scrollHeight}px`;

        if (el.scrollHeight !== currentScrollHeight.current && onResize) {
          onResize(el);
          currentScrollHeight.current = el.scrollHeight;
        }
      }
    }, [grow, value, sizeY, elementRef, onResize]);

    return (
      <FormField
        vkuiClass={classNames(
          getClassName("Textarea", platform),
          getSizeYClassName("Textarea", sizeY)
        )}
        className={className}
        style={style}
        getRootRef={getRootRef}
        disabled={restProps.disabled}
      >
        <textarea
          {...restProps}
          rows={rows}
          vkuiClass="Textarea__el"
          value={value}
          onChange={onChange}
          ref={elementRef}
        />
      </FormField>
    );
  }
);

// eslint-disable-next-line import/no-default-export
export default Textarea;
