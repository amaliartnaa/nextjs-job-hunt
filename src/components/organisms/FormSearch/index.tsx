import { Input } from '@/components/ui/input';
import React, { FC } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface FormSearchProps {

}

const index: FC<FormSearchProps> = ({ }) => {
  return (
    <div className=",t-6 bg-white p-4 shadow-sm inline-flex items-center gap-4 relative w-max z-10">
      <div className="inline-flex gap-3 items-center">
        <AiOutlineSearch className="w-6 h-6" />
        <Input className="py-8 w-[300px] border-none" placeholder="Job Title or keyword" />
      </div>
    </div>
  )
}

export default FormSearchProps