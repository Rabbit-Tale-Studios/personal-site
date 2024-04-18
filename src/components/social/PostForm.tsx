import { Avatar, Textarea, Divider } from '@nextui-org/react'
import Button from 'components/Button'
import { OutlineMore } from 'icons/Icons'
import React, { useState } from 'react'
import { CircularProgress } from '@nextui-org/react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'components/Form'

const formSchema = z.object({
  username: z.string().min(2).max(500),
})

const PostForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  const {
    formState: { errors },
  } = form

  let watch = form.watch('username')
  let progress = (watch.length / 500) * 100

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 bg-white-50 p-3 max-sm:border-b sm:rounded-2xl"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex items-start justify-between space-x-4">
              <div className="flex flex-1 flex-col space-y-4">
                <div className="flex space-x-4">
                  <div className="flex flex-1 space-x-2">
                    <Avatar
                      src="https://pbs.twimg.com/profile_images/1777614638261080064/H9iQD24q_400x400.jpg"
                      alt="avatar"
                    />
                    <FormControl>
                      {/* <Input
                        placeholder="shadcn"
                        {...field}
                        className="w-fit flex-1"
                      /> */}
                      <Textarea
                        // isInvalid={!!errors.username}
                        minRows={1}
                        maxRows={4}
                        placeholder="Hoot something nice to us."
                        spellCheck
                        autoComplete="off"
                        maxLength={500}
                        //onChange={(e) => setInputValue(e.target.value)}
                        className="w-fit flex-1"
                        classNames={{
                          // inputWrapper: [
                          //   'bg-transparent shadow-none group-data-[hover]:bg-transparent group-data-[focus=true]:bg-transparent',
                          //   //  !!errors.username &&
                          //   //    'ring-2 ring-offset-2 group-data-[focus=true]:ring-red-500 ring-red-500',
                          // ]
                          //   .filter(Boolean)
                          //   .join(' '),
                          //   input: !!errors.username && '!placeholder-red-500',
                          input: 'text-base',
                        }}
                        {...field}
                      />
                    </FormControl>
                  </div>
                </div>
              </div>
            </FormItem>
            // <FormItem>
            //   <FormLabel>Username</FormLabel>
            //   <FormControl>
            //     <Input placeholder="shadcn" {...field} />
            //   </FormControl>
            //   <FormDescription>
            //     This is your public display name.
            //   </FormDescription>
            //   <FormMessage />
            // </FormItem>
          )}
        />
        {/* <Button variant="accent" type="submit">
          Submit
        </Button> */}
        <div className="flex justify-between">
          <div className="flex space-x-2">
            <Button
              variant={'icon'}
              className={`group relative justify-start overflow-visible text-blueberry-600`}
            >
              <div className="relative before:absolute before:inset-1/2 before:size-0 before:-translate-x-1/2 before:-translate-y-1/2 before:transform before:rounded-full before:transition-all group-hover:text-blueberry-600 group-hover:before:block group-hover:before:size-8 group-hover:before:bg-blueberry-600 group-hover:before:opacity-30 group-hover:before:content-['']">
                <OutlineMore size={20} />
              </div>
            </Button>
            <Button
              variant={'icon'}
              className={`group relative justify-start overflow-visible text-blueberry-600`}
            >
              <div className="relative before:absolute before:inset-1/2 before:size-0 before:-translate-x-1/2 before:-translate-y-1/2 before:transform before:rounded-full before:transition-all group-hover:text-blueberry-600 group-hover:before:block group-hover:before:size-8 group-hover:before:bg-blueberry-600 group-hover:before:opacity-30 group-hover:before:content-['']">
                <OutlineMore size={20} />
              </div>
            </Button>
            <Button
              variant={'icon'}
              className={`group relative justify-start overflow-visible text-blueberry-600`}
            >
              <div className="relative before:absolute before:inset-1/2 before:size-0 before:-translate-x-1/2 before:-translate-y-1/2 before:transform before:rounded-full before:transition-all group-hover:text-blueberry-600 group-hover:before:block group-hover:before:size-8 group-hover:before:bg-blueberry-600 group-hover:before:opacity-30 group-hover:before:content-['']">
                <OutlineMore size={20} />
              </div>
            </Button>
            <Button
              variant={'icon'}
              className={`group relative justify-start overflow-visible text-blueberry-600`}
            >
              <div className="relative before:absolute before:inset-1/2 before:size-0 before:-translate-x-1/2 before:-translate-y-1/2 before:transform before:rounded-full before:transition-all group-hover:text-blueberry-600 group-hover:before:block group-hover:before:size-8 group-hover:before:bg-blueberry-600 group-hover:before:opacity-30 group-hover:before:content-['']">
                <OutlineMore size={20} />
              </div>
            </Button>
            {/* <Divider orientation="vertical" />
            <Button
              variant={'icon'}
              className={`group relative justify-start overflow-visible text-blueberry-600`}
            >
              <div className="relative before:absolute before:inset-1/2 before:size-0 before:-translate-x-1/2 before:-translate-y-1/2 before:transform before:rounded-full before:transition-all group-hover:text-blueberry-600 group-hover:before:block group-hover:before:size-8 group-hover:before:bg-blueberry-600 group-hover:before:opacity-30 group-hover:before:content-['']">
                <OutlineMore size={20} />
              </div>
            </Button> */}
          </div>
          <div className="flex h-10 items-center space-x-2">
            {/* <CircleProgress size={24} progress={progress} /> */}
            <CircularProgress
              aria-label="max hoot characters"
              size="md"
              value={progress}
              showValueLabel={500 - watch.length <= 20}
              valueLabel={
                500 - watch.length <= 20 ? `${500 - watch.length}` : ''
              }
              classNames={{
                base: 500 - watch.length === 0 && 'animate-shake',
                svg: `transition-all !size-8 ${500 - watch.length <= 20 && 'scale-[1.125]'}`,
                value: `text-xs text-shark-500 ${progress >= 100 && 'text-red-500'}`,
                indicator:
                  progress >= 100 || 500 - watch.length <= 0
                    ? 'text-red-600'
                    : 500 - watch.length <= 20
                      ? 'text-orange-600'
                      : 'text-blueberry-600',
              }}
            />
            <Button
              variant="ghost"
              disabled={!watch}
              type="button"
              aria="draft"
              text="Draft"
              size="sm"
            />
            {/* <Button variant="icon" type="button" size="sm">
              <OutlineMore size={24} />
            </Button> */}
            <Button
              text="hoot"
              disabled={!watch}
              variant="accent"
              type="submit"
              aria="hoot"
              size="sm"
            />
          </div>
        </div>
      </form>
    </Form>
  )
}

export default PostForm
