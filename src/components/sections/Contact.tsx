"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus("success");
        form.reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } },
  };


  return (
    <section className="contact-section" id="contact">
      {/* Background decoration */}
      <div className="contact-bg-glow contact-bg-glow--right" />
      <div className="contact-bg-glow contact-bg-glow--left" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          className="section-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Let&apos;s Connect</h2>
          <div className="underline" />
        </motion.div>

        <div className="contact-grid">
          
          {/* Contact Info */}
          <motion.div 
            className="contact-info-side"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h3 className="contact-subtitle" variants={itemVariants}>
              Ready to collaborate?
            </motion.h3>
            <motion.p className="contact-description" variants={itemVariants}>
              I&apos;m currently looking for new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
            </motion.p>
            
            <div className="contact-cards">
              {/* Email Card */}
              <motion.a 
                href="mailto:koushik9924@gmail.com" 
                className="hover-target contact-info-card"
                variants={itemVariants}
                whileHover={{ x: 4 }}
              >
                <div className="contact-info-icon contact-info-icon--cyan">
                  <Mail size={22} />
                </div>
                <div className="contact-info-text">
                  <span className="contact-info-label">Email</span>
                  <span className="contact-info-value">koushik9924@gmail.com</span>
                </div>
              </motion.a>

              {/* Phone Card */}
              <motion.a 
                href="tel:5154512785"
                className="hover-target contact-info-card"
                variants={itemVariants}
                whileHover={{ x: 4 }}
              >
                <div className="contact-info-icon contact-info-icon--purple">
                  <Phone size={22} />
                </div>
                <div className="contact-info-text">
                  <span className="contact-info-label">Phone</span>
                  <span className="contact-info-value">(515) 451-2785</span>
                </div>
              </motion.a>

              {/* Location Card */}
              <motion.div 
                className="contact-info-card"
                variants={itemVariants}
                whileHover={{ x: 4 }}
              >
                <div className="contact-info-icon contact-info-icon--emerald">
                  <MapPin size={22} />
                </div>
                <div className="contact-info-text">
                  <span className="contact-info-label">Location</span>
                  <span className="contact-info-value">Minnesota, USA</span>
                </div>
              </motion.div>

              {/* Social Links */}
              <div className="contact-social-grid">
                <motion.a 
                  href="https://github.com/koushik1133" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover-target contact-info-card contact-social-card"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                >
                  <div className="contact-info-icon contact-info-icon--cyan">
                    <FaGithub size={22} />
                  </div>
                  <span className="contact-info-label">GitHub</span>
                </motion.a>

                <motion.a 
                  href="https://www.linkedin.com/in/koushikgoudshaganti/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover-target contact-info-card contact-social-card"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                >
                  <div className="contact-info-icon contact-info-icon--purple">
                    <FaLinkedin size={22} />
                  </div>
                  <span className="contact-info-label">LinkedIn</span>
                </motion.a>
              </div>

              {/* Availability & Response Time */}
              <motion.div 
                className="contact-status-card"
                variants={itemVariants}
              >
                <div className="status-item">
                  <div className="status-indicator">
                    <div className="status-dot pulsing"></div>
                  </div>
                  <div className="status-text">
                    <span className="status-title">Status:</span>
                    <span className="status-value">Available for Full-Time Roles</span>
                  </div>
                </div>
                <div className="status-item">
                  <Clock size={16} className="status-icon" />
                  <div className="status-text">
                    <span className="status-title">Avg Response:</span>
                    <span className="status-value">&lt; 24 hours</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="terminal-window"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot close"></div>
                <div className="terminal-dot minimize"></div>
                <div className="terminal-dot maximize"></div>
              </div>
              <div className="terminal-title">message_payload.sh</div>
            </div>
            
            <div className="terminal-body">
              <div className="terminal-command">
                guest@jooeun:~$ <span className="prompt-text">sudo init contact --form</span>
              </div>
              
              <form className="terminal-form" action="https://formspree.io/f/xykarwkn" method="POST" onSubmit={handleSubmit}>
                <div className="terminal-form-group">
                  <label htmlFor="name" className="terminal-label">NAME:</label>
                  <div className="terminal-input-wrapper">
                    <div className="terminal-input-line"></div>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="terminal-input hover-target"
                      placeholder="Enter your name..." 
                      required
                    />
                  </div>
                </div>
                
                <div className="terminal-form-group">
                  <label htmlFor="email" className="terminal-label">EMAIL:</label>
                  <div className="terminal-input-wrapper">
                    <div className="terminal-input-line"></div>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="terminal-input hover-target"
                      placeholder="your@email.com" 
                      required
                    />
                  </div>
                </div>
                
                <div className="terminal-form-group">
                  <label htmlFor="message" className="terminal-label">MESSAGE:</label>
                  <div className="terminal-input-wrapper message-wrapper">
                    <div className="terminal-input-line message-line"></div>
                    <textarea 
                      id="message" 
                      name="message" 
                      className="terminal-input terminal-textarea hover-target"
                      placeholder="Type your message here..." 
                      required
                    ></textarea>
                  </div>
                </div>
                
                <div className="terminal-comment">
                  <br/>
                  /* Ready to deploy your message. */
                </div>
                
                <button type="submit" className="terminal-submit hover-target" disabled={formStatus === "submitting"}>
                  {formStatus === "submitting" ? "[ COMMITTING... ]" : "[ COMMIT & PUSH ]"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast Notification Portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {formStatus === "success" && (
            <motion.div 
              initial={{ opacity: 0, y: 50, x: 50 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: 20, x: 50 }}
              className="toast-notification success"
            >
              <CheckCircle2 size={24} className="toast-icon" />
              <div className="toast-content">
                <h4>Form submitted</h4>
                <p>Your message has been successfully transmitted. I'll get back to you shortly.</p>
              </div>
              <button 
                onClick={() => setFormStatus("idle")}
                className="toast-close hover-target"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </motion.div>
          )}
          {formStatus === "error" && (
            <motion.div 
              initial={{ opacity: 0, y: 50, x: 50 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: 20, x: 50 }}
              className="toast-notification error"
            >
              <div className="toast-content">
                <h4>Transmission Failed</h4>
                <p>There was an error sending your message. Please try again or email me directly.</p>
              </div>
              <button 
                onClick={() => setFormStatus("idle")}
                className="toast-close hover-target"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
