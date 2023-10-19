import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "../../components/ui/sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../../components/ui/form";
import { toast } from "../../components/ui/use-toast";
import { Input } from "../../components/ui/input";
import { Switch } from "../../components/ui/switch";
import { PlusIcon } from "lucide-react";
import { Textarea } from "../../components/ui/textarea";

type Props = {};

function FormRegulasi({}: Props) {
  const FormSchema = z.object({
    id: z.number(),
    nomor: z.string(),
    keterangan: z.string(),
    tujuan_surat: z.string(),
    status: z.string(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const status = [
    { value: "Disetujui", label: "Disetujui" },
    { value: "Ditolak", label: "Ditolak" },
    { value: "Proses", label: "Proses" },
    { value: "Finish", label: "Finish" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <PlusIcon className="mr-2 w-5 h-5" />
          Add New
        </Button>
      </SheetTrigger>
      <SheetContent className="h-screen overflow-auto">
        <SheetHeader>
          <SheetTitle>Form Tambah Data Regulasi</SheetTitle>
          <SheetDescription>
            Ini adalah form untuk menambah data regulasi.
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-4 my-4"
          >
            <FormField
              control={form.control}
              name="nomor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nomor Surat</FormLabel>
                  <FormControl>
                    <Input placeholder="Nomor Surat" {...field} />
                  </FormControl>
                  <FormDescription>
                    Nomor Surat Contoh : 1234/XX/2021
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih Status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {status.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>Pilih status.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="keterangan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keterangan</FormLabel>
                  <Textarea
                    placeholder="Keterangan Surat"
                    className="resize-none"
                    {...field}
                  />
                  <FormDescription>Isi keterangan surat.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="tujuan_surat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tujuan Surat</FormLabel>
                  <Textarea
                    placeholder="Tujuan Surat"
                    className="resize-none"
                    {...field}
                  />
                  <FormDescription>Isi tujuan surat.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}

export default FormRegulasi;
