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
import { CalendarIcon, PlusIcon } from "lucide-react";
import { Separator } from "../../components/ui/separator";
import { Textarea } from "../../components/ui/textarea";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { format } from "date-fns";
import { cn } from "../../lib/utils";
import { Calendar } from "../../components/ui/calendar";

type Props = {};

function FormAnggaran({}: Props) {
  const FormSchema = z.object({
    nomor: z.string(),
    item: z.string(),
    tanggal_perencanaan: z.date(),
    anggaran: z.number(),
    status: z.string(),
    jenis_anggaran: z.string(),
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
    { value: "Process", label: "Process" },
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
          <SheetTitle>Form Add Employee</SheetTitle>
          <SheetDescription>
            Ini adalah form untuk menambah data pegawai.
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
                  <FormLabel>Nomor Anggaran</FormLabel>
                  <FormControl>
                    <Input placeholder="Nomor Anggaran" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="item"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Item</FormLabel>
                  <FormControl>
                    <Input placeholder="Item" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tanggal_perencanaan"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Tanggal Perencanaan</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            " pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        className="bg-background shadow-lg"
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Your date of birth is used to calculate your age.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="anggaran"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jumlah Anggaran</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      placeholder="Rp 1.000.000"
                      {...field}
                      onChange={(e) =>
                        field.onChange(parseFloat(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormDescription>This is your avarage salary</FormDescription>
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
                        <SelectValue placeholder="Select Status" />
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
                  <FormDescription>Pilih Status</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jenis_anggaran"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jenis Anggaran</FormLabel>
                  <FormControl>
                    <Input placeholder="Jenis Anggaran" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
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

export default FormAnggaran;
