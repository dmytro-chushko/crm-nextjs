'use client';

import React from 'react';
import { Form, Formik } from 'formik';
import { Button } from '@/app/components/Button';
import { InputField } from '@/app/components/InputFIeld';
import LogoUploader from '@/app/components/LogoUploader';
import {
  CompanyStatus,
  createCompany,
  getCategories,
  getCountries,
} from '@/lib/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { StatusLabel } from './status-label';

export type CompanyFieldValues = {
  title: string;
  description: string;
  status: CompanyStatus;
  countryId: string;
  categoryId: string;
  joinedDate: string;
};

const initialValues: CompanyFieldValues = {
  title: '',
  status: CompanyStatus.Active,
  countryId: '',
  categoryId: '',
  joinedDate: '',
  description: '',
};

export interface CompanyFormProps {
  onSubmit?: (values: CompanyFieldValues) => void | Promise<void>;
}

export default function CompanyForm({ onSubmit }: CompanyFormProps) {
  const queryClient = useQueryClient();

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: 10 * 1000,
  });

  const { data: countries } = useQuery({
    queryKey: ['countries'],
    queryFn: getCountries,
    staleTime: 10 * 1000,
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createCompany,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['companies'],
      });
    },
  });

  const handleSubmit = async (values: CompanyFieldValues) => {
    await mutateAsync({
      ...values,
      categoryTitle:
        categories?.find(({ id }) => id === values.categoryId)?.title ?? '',
      countryTitle:
        countries?.find(({ id }) => id === values.countryId)?.title ?? '',
    });

    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-10">
        <p className="mb-0.5 text-xl">Add new company</p>
        <div className="flex gap-6">
          <div className="flex flex-col flex-1 gap-5">
            <LogoUploader label="Logo" placeholder="Upload photo" />
            <InputField
              required
              label="Status"
              placeholder="Status"
              name="status"
              as="select"
            >
              {(Object.values(CompanyStatus) as CompanyStatus[]).map(status => (
                <option key={status} value={status}>
                  <StatusLabel status={status} styled={false} />
                </option>
              ))}
            </InputField>
            <InputField
              required
              label="Country"
              placeholder="Country"
              name="country"
              as="select"
            >
              {countries?.map(country => (
                <option key={country.id} value={country.id}>
                  {country.title}
                </option>
              ))}
            </InputField>
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <InputField label="Name" placeholder="Name" name="name" />
            <InputField
              label="Category"
              placeholder="Category"
              name="category"
            />
            <InputField label="Joined date" type="date" name="date" />
            <InputField
              label="Description"
              placeholder="Description"
              name="description"
            />
          </div>
        </div>
        <Button type="submit">Add company</Button>
      </Form>
    </Formik>
  );
}
