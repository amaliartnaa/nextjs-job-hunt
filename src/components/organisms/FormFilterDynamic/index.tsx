import { Form } from '@/components/ui/form'
import React, { FC } from 'react'
import CheckboxForms from './CheckboxForms';

interface FormFilterDynamicProps {
  formFilter: any
  onSubmitFilter: (val: any) => Promise<void> | undefined;
  filterForms: any[]
}

const items = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
]

const FormFilterDynamic: FC<FormFilterDynamicProps> = ({ filterForms, formFilter, onSubmitFilter }) => {
  return (
    <Form {...formFilter}>
      <form onSubmit={formFilter.handleSubmit(onSubmitFilter)}>
        <CheckboxForms formFilter={formFilter} items={items} name="categories" label="Categories"/>
      </form>
    </Form>
  )
}

export default FormFilterDynamic