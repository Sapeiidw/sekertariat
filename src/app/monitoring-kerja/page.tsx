import React from 'react'
import { Button, buttonVariants } from '../../components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '../../lib/utils'
import { LockIcon } from 'lucide-react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='grid grid-cols-4 gap-4 h-[80vh]'>
        <div className={cn("relative rounded-xl bg-white shadow-soft-2xl  flex flex-col justify-end gap-4 text-center bg-cover bg-gradient-to-t from-blue-900 via-blue-800 to-60% to-transparent bg-opacity-0 overflow-hidden",
        false && 'grayscale'
        )}
        // style={{backgroundImage: "url('/patrick.jpeg')"}}
        >
            <Image alt='' src={'/patrick.jpeg'} fill className='object-cover -z-10' unoptimized />
            <div className='w-full h-[150px] bg-blue-800 flex flex-col p-4 gap-4 relative '>
            <div className="flex flex-col ">
                <h1 className='text-2xl font-bold'>Bidang PA</h1>
                <span>Perlindungan Anak</span>
            </div>
            <Button variant={'ghost'} className={buttonVariants({variant: 'outline'})}>
                Kunjungi</Button>
            </div>
        </div>
        <div className={cn("relative rounded-xl bg-white shadow-soft-2xl  flex flex-col justify-end gap-4 text-center bg-cover bg-gradient-to-t from-blue-900 via-blue-800 to-60% to-transparent bg-opacity-0 overflow-hidden",
        true && 'grayscale'
        )}
        // style={{backgroundImage: "url('/patrick.jpeg')"}}
        >
            <Image alt='' src={'/patrick.jpeg'} fill className='object-cover -z-10' unoptimized />
            <div className='w-full h-[150px] bg-blue-800 flex flex-col p-4 gap-4 relative '>
            <div className="flex flex-col ">
                <h1 className='text-2xl font-bold'>Bidang PA</h1>
                <span>Perlindungan Anak</span>
            </div>
            <Button variant={'ghost'} disabled className={buttonVariants({variant: 'outline'})}>
            <LockIcon className='mr-2' size={15} />
                Kunjungi</Button>
            </div>
        </div>
        <div className={cn("relative rounded-xl bg-white shadow-soft-2xl  flex flex-col justify-end gap-4 text-center bg-cover bg-gradient-to-t from-blue-900 via-blue-800 to-60% to-transparent bg-opacity-0 overflow-hidden",
        true && 'grayscale'
        )}
        // style={{backgroundImage: "url('/patrick.jpeg')"}}
        >
            <Image alt='' src={'/patrick.jpeg'} fill className='object-cover -z-10' unoptimized />
            <div className='w-full h-[150px] bg-blue-800 flex flex-col p-4 gap-4 relative '>
            <div className="flex flex-col ">
                <h1 className='text-2xl font-bold'>Bidang PA</h1>
                <span>Perlindungan Anak</span>
            </div>
            <Button variant={'ghost'} disabled className={buttonVariants({variant: 'outline'})}>
            <LockIcon className='mr-2' size={15} />
            Kunjungi</Button>
            </div>
        </div>
        <div className={cn("relative rounded-xl bg-white shadow-soft-2xl  flex flex-col justify-end gap-4 text-center bg-cover bg-gradient-to-t from-blue-900 via-blue-800 to-60% to-transparent bg-opacity-0 overflow-hidden",
        false && 'grayscale'
        )}
        // style={{backgroundImage: "url('/patrick.jpeg')"}}
        >
            <Image alt='' src={'/patrick.jpeg'} fill className='object-cover -z-10' unoptimized />
            <div className='w-full h-[150px] bg-blue-800 flex flex-col p-4 gap-4 relative '>
            <div className="flex flex-col ">
                <h1 className='text-2xl font-bold'>Bidang PA</h1>
                <span>Perlindungan Anak</span>
            </div>
            <Button variant={'ghost'}  className={buttonVariants({variant: 'outline'})}>Kunjungi</Button>
            </div>
        </div>
    </div>
  )
}

export default Page