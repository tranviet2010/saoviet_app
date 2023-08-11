import { FieldsetStyle } from "./fieldset"

type FormValues = {
    children?: string | any
    title?: string
}
export default function BaseFieldset({ children, title }: FormValues) {

    return (
        <FieldsetStyle>
            <fieldset className="arh-fieldset" >
                <legend>{title}</legend>
                {children}
            </fieldset>
        </FieldsetStyle>
    )
}