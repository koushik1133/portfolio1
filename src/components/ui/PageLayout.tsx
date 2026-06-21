"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export default function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  return (
    <div className="page-wrapper">
      <div className="page-content-container">
        <motion.div 
          className="page-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="page-title">{title}</h1>
          {subtitle && <p className="page-subtitle">{subtitle}</p>}
        </motion.div>
        
        <motion.div 
          className="page-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
