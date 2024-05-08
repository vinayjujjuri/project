import { isNil, isString, isFunction } from 'lodash';
import styles from './buttonComponent.module.css';


interface ButtonComponentProps {
    label?:string;
    onClickFunction : () => void;
    className:string;
}

export default function ButtonComponent(props:ButtonComponentProps) {

    const defaultOnClick = () => {
        console.log("default button clicked");
    };

    const getClassName = ():string => {
        if(isNil(props.className) || !isString(props.className)) {
            return styles.defaultStyles
        } else {
            return props.className
        }
    };

    const getLabelName = ():string => {
        if(isNil(props.label) || !isString(props.label)) {
            return "defalut Button"
        } else {
            return props.label
        }
    };

    const getOnClickFunction = (): () => void => {
        if(isNil(props.onClickFunction) || !isFunction(props.onClickFunction)) {
            return defaultOnClick;
        } else {
            return props.onClickFunction
        }
    }

    return (
        <div>
            <button className={getClassName()} onClick={getOnClickFunction()}>{getLabelName()}</button>
        </div>
    )
}