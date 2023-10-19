import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
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
import { Separator } from "../../components/ui/separator";

type Props = {};

function FormPegawai({}: Props) {
  const FormSchema = z.object({
    id: z.number(),
    nama: z.string(),
    email: z.string(),
    avatar: z.string(),
    jabatan: z.string(),
    departemen: z.string(),
    gaji: z.coerce.number(),
    status: z.boolean(),
    reward: z.string(),
    punish: z.string(),
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

  const jabatan = [
    { value: "manager", label: "Manager" },
    { value: "staff", label: "Staff" },
    { value: "admin", label: "Admin" },
    { value: "hrd", label: "HRD" },
    { value: "ceo", label: "CEO" },
  ];

  const departments = [
    { label: "Human Resources", value: "HR" },
    { label: "Finance", value: "FIN" },
    { label: "Marketing", value: "MKT" },
  ];

  return (
    
      <Sheet>
        <SheetTrigger asChild>
          <Button>
            <PlusIcon className="mr-2 w-5 h-5" />
            Add New
          </Button>
        </SheetTrigger>
        <SheetContent className="h-screen overflow-auto" >
          <SheetHeader>
            <SheetTitle>Form Tambah Data Pegawai</SheetTitle>
            <SheetDescription>
              Ini adalah form untuk menambah data pegawai.
            </SheetDescription>
          </SheetHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6 my-4"
            >
              <FormField
                control={form.control}
                name="nama"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Pegawai</FormLabel>
                    <FormControl>
                      <Input placeholder="Nama Pegawai" {...field} />
                    </FormControl>
                    <FormDescription>
                      Isi nama pegawai yang akan ditambahkan.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jabatan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Jabatan.</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih Jabatan" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {jabatan.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>Pilih jabatan pegawai.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="departemen"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Departemen</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih Departemen" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {departments.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>Pilih Departemen Pegawai</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gaji"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gaji Pegawai</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={0}
                        placeholder="Rp 1.000.000"
                        {...field}
                        onChange={(e) => field.onChange(parseFloat(e.target.value))}
                      />
                    </FormControl>
                    <FormDescription>
                      Isi gaji pegawai yang akan ditambahkan.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="reward"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reward</FormLabel>
                    <FormControl>
                      <Input placeholder="Reward" {...field} />
                    </FormControl>
                    <FormDescription>
                      Ini merupakan reward yang diperoleh pegawai.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="punish"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Punish</FormLabel>
                    <FormControl>
                      <Input placeholder="Punishment" {...field} />
                    </FormControl>
                    <FormDescription>
                      Ini merupakan punishment yang diperoleh pegawai.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Status</FormLabel>
                      <FormDescription>Isi status. Apakah pegawai aktif?</FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
                <Button type="submit" className="w-full">Submit</Button>
            </form>
          </Form>
        </SheetContent>
      </Sheet>

  );
}

export default FormPegawai;
