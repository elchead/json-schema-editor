import { JSX } from 'react/jsx-runtime';
import { z } from 'zod';

declare const baseSchema: z.ZodObject<{
    type: z.ZodOptional<z.ZodEnum<{
        string: "string";
        number: "number";
        boolean: "boolean";
        object: "object";
        integer: "integer";
        array: "array";
    }>>;
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    default: z.ZodOptional<z.ZodAny>;
    minimum: z.ZodOptional<z.ZodNumber>;
    maximum: z.ZodOptional<z.ZodNumber>;
    exclusiveMin: z.ZodOptional<z.ZodNumber>;
    exclusiveMax: z.ZodOptional<z.ZodNumber>;
    multipleOf: z.ZodOptional<z.ZodNumber>;
    minLength: z.ZodOptional<z.ZodNumber>;
    maxLength: z.ZodOptional<z.ZodNumber>;
    minContains: z.ZodOptional<z.ZodNumber>;
    maxContains: z.ZodOptional<z.ZodNumber>;
    minProperties: z.ZodOptional<z.ZodNumber>;
    maxProperties: z.ZodOptional<z.ZodNumber>;
    isModifiable: z.ZodOptional<z.ZodBoolean>;
    "x-modifiable": z.ZodOptional<z.ZodArray<z.ZodString>>;
    pattern: z.ZodOptional<z.ZodString>;
    format: z.ZodOptional<z.ZodString>;
    minItems: z.ZodOptional<z.ZodNumber>;
    maxItems: z.ZodOptional<z.ZodNumber>;
    uniqueItems: z.ZodOptional<z.ZodBoolean>;
    enum: z.ZodOptional<z.ZodArray<z.ZodAny>>;
    $id: z.ZodOptional<z.ZodString>;
    $schema: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;

declare type JSONSchema = z.infer<typeof baseSchema> & {
    properties?: {
        [key: string]: JSONSchema;
    };
    items?: JSONSchema | JSONSchema[];
    required?: string[];
    additionalProperties?: boolean | JSONSchema;
};

export declare const JsonSchemaEditor: ({ rootType, readOnly, theme, styles, onChange, defaultValue, }: JsonSchemaEditorProps) => JSX.Element;

declare interface JsonSchemaEditorProps {
    rootType: "object" | "array";
    readOnly: boolean;
    theme: "dark" | "light";
    styles?: Styles;
    onChange?: (schema: JSONSchema) => void;
    defaultValue?: JSONSchema;
}

declare interface Styles {
    output: {
        position: "top" | "bottom" | "left" | "right";
        showJson: boolean;
        width: "sm" | "md" | "lg" | "full";
        height: "sm" | "md" | "lg" | "full";
    };
    form: {
        width: "sm" | "md" | "lg" | "full";
        height: "sm" | "md" | "lg" | "full";
    };
    settings: {
        width: "sm" | "md" | "lg" | "full";
    };
    spacing: "sm" | "md" | "lg";
}

export { }
