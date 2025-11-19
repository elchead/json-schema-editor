import { JSX as JSX_2 } from 'react/jsx-runtime';
import { z } from 'zod';

declare const baseSchema: z.ZodObject<{
    type: z.ZodOptional<z.ZodEnum<["string", "number", "integer", "boolean", "object", "array"]>>;
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
    "x-modifiable": z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    pattern: z.ZodOptional<z.ZodString>;
    format: z.ZodOptional<z.ZodString>;
    minItems: z.ZodOptional<z.ZodNumber>;
    maxItems: z.ZodOptional<z.ZodNumber>;
    uniqueItems: z.ZodOptional<z.ZodBoolean>;
    enum: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
    $id: z.ZodOptional<z.ZodString>;
    $schema: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type?: "string" | "number" | "boolean" | "object" | "integer" | "array" | undefined;
    title?: string | undefined;
    description?: string | undefined;
    default?: any;
    minimum?: number | undefined;
    maximum?: number | undefined;
    exclusiveMin?: number | undefined;
    exclusiveMax?: number | undefined;
    multipleOf?: number | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
    minContains?: number | undefined;
    maxContains?: number | undefined;
    minProperties?: number | undefined;
    maxProperties?: number | undefined;
    isModifiable?: boolean | undefined;
    "x-modifiable"?: string[] | undefined;
    pattern?: string | undefined;
    format?: string | undefined;
    minItems?: number | undefined;
    maxItems?: number | undefined;
    uniqueItems?: boolean | undefined;
    enum?: any[] | undefined;
    $id?: string | undefined;
    $schema?: string | undefined;
}, {
    type?: "string" | "number" | "boolean" | "object" | "integer" | "array" | undefined;
    title?: string | undefined;
    description?: string | undefined;
    default?: any;
    minimum?: number | undefined;
    maximum?: number | undefined;
    exclusiveMin?: number | undefined;
    exclusiveMax?: number | undefined;
    multipleOf?: number | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
    minContains?: number | undefined;
    maxContains?: number | undefined;
    minProperties?: number | undefined;
    maxProperties?: number | undefined;
    isModifiable?: boolean | undefined;
    "x-modifiable"?: string[] | undefined;
    pattern?: string | undefined;
    format?: string | undefined;
    minItems?: number | undefined;
    maxItems?: number | undefined;
    uniqueItems?: boolean | undefined;
    enum?: any[] | undefined;
    $id?: string | undefined;
    $schema?: string | undefined;
}>;

declare type JSONSchema = z.infer<typeof baseSchema> & {
    properties?: {
        [key: string]: JSONSchema;
    };
    items?: JSONSchema | JSONSchema[];
    required?: string[];
    additionalProperties?: boolean | JSONSchema;
};

export declare const JsonSchemaEditor: ({ rootType, readOnly, theme, styles, onChange, defaultValue, }: JsonSchemaEditorProps) => JSX_2.Element;

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
