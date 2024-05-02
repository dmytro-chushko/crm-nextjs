'use client';

import CompanyForm from "@/app/components/CompanyForm"

const Page = () => {
  return (
    <div className="py-6 px-6">
     <CompanyForm onSubmit={console.log}/>
    </div>
  )
}

export default Page