import type { ColumnDef } from "@tanstack/vue-table"
import type { Projects } from "../supabaseQueries"
import { RouterLink } from "vue-router"

export const columns: ColumnDef<Projects[0]>[] = [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
    cell: ({ row }) => {
      return h(RouterLink, { to: `/projects/${ row.original.slug}`,class: 'text-left font-medium hover:bg-muted block w-full' },() => row.getValue('name'))
    },
  },
  {
    accessorKey: 'created_at',
    header: () => h('div', { class: 'text-left' }, 'Created Date'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium' },row.getValue('created_at'))
    },
  },
  {
    accessorKey: 'id',
    header: () => h('div', { class: 'text-left' }, 'Project Id'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium' },row.getValue('id'))
    },
  },
  {
    accessorKey: 'collaborators',
    header: () => h('div', { class: 'text-left' }, 'Collaborators'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium' },JSON.stringify(row.getValue('collaborators')))
    },
  }
]