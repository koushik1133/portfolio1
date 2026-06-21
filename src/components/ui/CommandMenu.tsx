"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Search, 
  Home, 
  User, 
  Briefcase, 
  FolderGit2, 
  Wrench, 
  GraduationCap, 
  Mail, 
  SunMoon, 
  MessageSquare,
  CornerDownLeft
} from "lucide-react";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Actions";
  icon: React.ReactNode;
  shortcut?: string;
  action: () => void;
}

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const itemsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Function to toggle theme using existing page elements
  const toggleTheme = () => {
    const themeToggleBtn = document.getElementById("themeToggle");
    if (themeToggleBtn) {
      themeToggleBtn.click();
    } else {
      const body = document.querySelector("body");
      if (!body) return;
      const isCurrentlyDark = body.classList.contains("dark-theme");
      if (isCurrentlyDark) {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        localStorage.setItem("theme", "light");
      } else {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
      }
    }
  };

  // Scroll helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Open ChatDeck
  const openChatDeck = () => {
    window.dispatchEvent(new CustomEvent("open-chat-deck"));
  };

  const commands: CommandItem[] = [
    // Navigation
    {
      id: "nav-home",
      title: "Go to Home",
      category: "Navigation",
      icon: <Home size={16} />,
      action: () => scrollToSection("home"),
    },
    {
      id: "nav-about",
      title: "Go to About",
      category: "Navigation",
      icon: <User size={16} />,
      action: () => scrollToSection("about"),
    },
    {
      id: "nav-experience",
      title: "Go to Experience",
      category: "Navigation",
      icon: <Briefcase size={16} />,
      action: () => scrollToSection("experience"),
    },
    {
      id: "nav-projects",
      title: "Go to Projects",
      category: "Navigation",
      icon: <FolderGit2 size={16} />,
      action: () => scrollToSection("projects"),
    },
    {
      id: "nav-skills",
      title: "Go to Skills",
      category: "Navigation",
      icon: <Wrench size={16} />,
      action: () => scrollToSection("skills"),
    },
    {
      id: "nav-education",
      title: "Go to Education",
      category: "Navigation",
      icon: <GraduationCap size={16} />,
      action: () => scrollToSection("education"),
    },
    {
      id: "nav-contact",
      title: "Go to Contact",
      category: "Navigation",
      icon: <Mail size={16} />,
      action: () => scrollToSection("contact"),
    },
    // Actions
    {
      id: "action-theme",
      title: "Toggle Theme (Light / Dark)",
      category: "Actions",
      icon: <SunMoon size={16} />,
      shortcut: "T",
      action: toggleTheme,
    },
    {
      id: "action-agent",
      title: "Chat with Koushik's Personal Agent",
      category: "Actions",
      icon: <MessageSquare size={16} />,
      shortcut: "A",
      action: openChatDeck,
    },
  ];

  // Filter commands
  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cmd.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sync state and dialog open status
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
        setTimeout(() => {
          inputRef.current?.focus();
        }, 30);
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  // Key event listeners for Cmd+K and shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle Cmd+K / Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      // If open, handle arrow keys, enter, escape
      if (isOpen) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) => 
            prev < filteredCommands.length - 1 ? prev + 1 : 0
          );
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) => 
            prev > 0 ? prev - 1 : filteredCommands.length - 1
          );
        } else if (e.key === "Enter") {
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action();
            setIsOpen(false);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex]);

  // Fallback backdrop click for browsers without closedby support
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !isOpen) return;

    if (!("closedBy" in HTMLDialogElement.prototype)) {
      const handleBackdropClick = (event: MouseEvent) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isDialogContent = (
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        );
        if (!isDialogContent) {
          setIsOpen(false);
        }
      };
      dialog.addEventListener("click", handleBackdropClick);
      return () => {
        dialog.removeEventListener("click", handleBackdropClick);
      };
    }
  }, [isOpen]);

  // Scroll active item into view inside the list
  useEffect(() => {
    const activeBtn = itemsRef.current[selectedIndex];
    if (activeBtn) {
      activeBtn.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  // Reset selection index when search query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  const handleClose = () => {
    setIsOpen(false);
    setSearchQuery("");
    setSelectedIndex(0);
  };

  const handleItemClick = (cmd: CommandItem) => {
    cmd.action();
    handleClose();
  };

  return (
    <>
      {/* Quick trigger hint helper in screen corner or in navbar. 
          Usually command palettes just listen to key binds natively. */}
      
      <dialog
        ref={dialogRef}
        onClose={handleClose}
        className="command-menu-dialog"
        {...({ closedby: "any" } as any)}
      >
        {isOpen && (
          <div className="command-menu-container">
            {/* Search Input wrapper */}
            <div className="command-menu-search-wrapper">
              <Search className="command-menu-search-icon" size={18} />
              <input
                ref={inputRef}
                type="text"
                className="command-menu-input"
                placeholder="Type a command or search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="command-menu-shortcut">ESC</span>
            </div>

            {/* Scrollable list */}
            <div className="command-menu-list">
              {filteredCommands.length === 0 ? (
                <div className="p-4 text-center text-xs text-zinc-500 font-mono">
                  No commands found matching "{searchQuery}"
                </div>
              ) : (
                <>
                  {/* Categorized list items */}
                  {["Navigation", "Actions"].map((category) => {
                    const categoryCmds = filteredCommands.filter(
                      (c) => c.category === category
                    );
                    if (categoryCmds.length === 0) return null;

                    return (
                      <div key={category} className="mb-2">
                        <div className="command-menu-group-title">
                          {category}
                        </div>
                        {categoryCmds.map((cmd) => {
                          // Find index of this item in the global filteredCommands list
                          const globalIdx = filteredCommands.findIndex(
                            (c) => c.id === cmd.id
                          );
                          const isActive = globalIdx === selectedIndex;

                          return (
                            <button
                              key={cmd.id}
                              ref={(el) => {
                                itemsRef.current[globalIdx] = el;
                              }}
                              className={`command-menu-item hover-target ${
                                isActive ? "active" : ""
                              }`}
                              onClick={() => handleItemClick(cmd)}
                              onMouseEnter={() => setSelectedIndex(globalIdx)}
                            >
                              <div className="command-menu-item-left">
                                <span className="command-menu-item-icon">
                                  {cmd.icon}
                                </span>
                                <span>{cmd.title}</span>
                              </div>
                              {cmd.shortcut ? (
                                <span className="command-menu-shortcut">
                                  {cmd.shortcut}
                                </span>
                              ) : isActive ? (
                                <span className="command-menu-shortcut flex items-center gap-1">
                                  <CornerDownLeft size={8} /> Enter
                                </span>
                              ) : null}
                            </button>
                          );
                        })}
                      </div>
                    );
                  })}
                </>
              )}
            </div>

            {/* Footer status bar */}
            <div className="command-menu-footer">
              <div className="command-menu-instructions">
                <div className="command-menu-key-hint">
                  <span className="command-menu-key">↑↓</span>
                  <span>to navigate</span>
                </div>
                <div className="command-menu-key-hint">
                  <span className="command-menu-key">Enter</span>
                  <span>to select</span>
                </div>
              </div>
              <div className="command-menu-key-hint">
                <span className="command-menu-key">⌘K</span>
                <span>or</span>
                <span className="command-menu-key">Ctrl+K</span>
                <span>to toggle</span>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
