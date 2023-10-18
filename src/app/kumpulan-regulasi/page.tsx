"use client"
import React from 'react'
import TableRegulasi from './TableRegulasi'


export default function Page() {
  return (
    <div className="w-full flex flex-col gap-6">
      <section className="flex flex-col gap-2">
        <TableRegulasi />
      </section>
    </div>
  )
}