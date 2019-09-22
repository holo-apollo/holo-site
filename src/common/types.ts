import { ChangeEvent } from 'react';
import {
  FormikProps as OriginalFormikProps,
  FormikErrors as OriginalFormikErrors,
} from 'formik';

export type SelectOption<T> = {
  value: T;
  label: string;
};

export type InputChangeEvent = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

export type FormikErrors<Values> = OriginalFormikErrors<Values> & {
  nonFieldErrors?: string;
};

export type FormikProps<Values> = OriginalFormikProps<Values> & {
  errors: FormikErrors<Values>;
};
