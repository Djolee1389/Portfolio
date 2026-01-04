import React from 'react'

export const Footer = () => {
  return (
    <footer className="w-full py-5 flex justify-center items-center border-t mt-10">
      <p className="text-sm text-(--secondary)">
        © {new Date().getFullYear()} Djordje Milutin. All rights reserved.
      </p>
    </footer>
  )
}
