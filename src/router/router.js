
import { createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import RootLayout from './RootLayout/RootLayout'
import Task2A from "../Task2A/Main"
import Task2B from "../Task2B/Main"
import Task3 from "../Task3/Main"
import Task4 from "../Task4/Main"

export const router=createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<RootLayout />}>
      <Route path='task2A' element={<Task2A />} />
      <Route path='task2B' element={<Task2B />} />
      <Route path='task3' element={<Task3 />} />
      <Route path='task4' element={<Task4 />} />

    </Route>
  )
)