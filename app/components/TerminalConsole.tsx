'use client'
import React, { useState, useRef, useEffect } from 'react'
import { Terminal, Command, ShieldAlert, Sparkles, RefreshCw } from 'lucide-react'

interface HistoryEntry {
    command: string;
    output: React.ReactNode;
}

const TerminalConsole = () => {
    const [history, setHistory] = useState<HistoryEntry[]>([
        {
            command: 'system-init',
            output: (
                <div className="text-lightest-slate/60 text-xs">
                    <p className="text-blue font-bold font-syne">Welcome to Antigravity CLI v1.0.0</p>
                    <p>Type <span className="text-blue font-semibold">help</span> to list available commands.</p>
                </div>
            )
        }
    ])
    const [input, setInput] = useState('')
    const [isMatrix, setIsMatrix] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    // Handle CLI commands
    const handleCommand = (cmd: string) => {
        const cleanCmd = cmd.trim().toLowerCase()
        let response: React.ReactNode = ''

        switch (cleanCmd) {
            case 'help':
                response = (
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-lightest-slate/80 font-mono">
                        <div><span className="text-blue">about</span> - Personal bio & philosophy</div>
                        <div><span className="text-blue">skills</span> - Display tech skill matrix</div>
                        <div><span className="text-blue">projects</span> - List directories of projects</div>
                        <div><span className="text-blue">contact</span> - Direct contact channels</div>
                        <div><span className="text-blue">matrix</span> - Launch digital rain screen</div>
                        <div><span className="text-blue">clear</span> - Clear terminal window</div>
                    </div>
                )
                break
            case 'about':
                response = (
                    <div className="text-xs text-lightest-slate/85 font-mono leading-relaxed space-y-1">
                        <p>👤 <span className="text-blue font-semibold">Name:</span> Manh Tan Nguyen</p>
                        <p>🚀 <span className="text-blue font-semibold">Role:</span> Software Engineer & Innovator</p>
                        <p>📍 <span className="text-blue font-semibold">Base:</span> Ho Chi Minh City, VN</p>
                        <p>💡 <span className="text-blue font-semibold">Focus:</span> Building solid backend engineering architectures & AI integrations (LLMs, vector stores, green-computing metrics).</p>
                    </div>
                )
                break
            case 'skills':
                response = (
                    <div className="text-xs text-lightest-slate/85 font-mono space-y-1">
                        <div>React/NextJS:  <span className="text-blue">[█████████░]</span> 90%</div>
                        <div>NodeJS/Express:<span className="text-blue">[████████░░]</span> 80%</div>
                        <div>Flutter/Mobile:<span className="text-blue">[███████░░░]</span> 70%</div>
                        <div>MongoDB/NoSQL: <span className="text-blue">[████████░░]</span> 80%</div>
                        <div>AI Agents/RAG: <span className="text-blue">[███████░░░]</span> 70%</div>
                    </div>
                )
                break
            case 'projects':
                response = (
                    <div className="text-xs text-lightest-slate/80 font-mono space-y-1">
                        <p className="text-blue/60 font-semibold mb-1">drwxr-xr-x  projects_archive</p>
                        <p>📂 <span className="text-white">mindary/</span> - AI-powered mental wellness app</p>
                        <p>📂 <span className="text-white">greeli-forum/</span> - Sustainable eco discussions portal</p>
                        <p>📂 <span className="text-white">fintech-club-web/</span> - Official RMIT FinTech Hub site</p>
                        <p className="text-lightest-slate/40 text-[10px] mt-1">Hint: Hover on cards above for visual breakdowns.</p>
                    </div>
                )
                break
            case 'contact':
                response = (
                    <div className="text-xs text-lightest-slate/85 font-mono space-y-1">
                        <p>📧 Email: <a href="mailto:tannm2005@gmail.com" className="text-blue underline">TanNM2005@gmail.com</a></p>
                        <p>📞 Phone: <span className="text-white">+84 859 493 676</span></p>
                        <p>🌐 Link: <a href="https://linkedin.com/in/manh-tan-nguyen-6373b3275/" className="text-blue underline" target="_blank">LinkedIn Profile</a></p>
                    </div>
                )
                break
            case 'matrix':
                setIsMatrix(true)
                response = <p className="text-blue animate-pulse">Launching Matrix mode... Press 'ESC' or click clear to return.</p>
                break
            case 'clear':
                setHistory([])
                setInput('')
                return
            default:
                response = (
                    <div className="text-rose-400 text-xs font-mono flex items-center gap-1.5">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        <span>Command not recognized: '{cmd}'. Type 'help' for support.</span>
                    </div>
                )
        }

        setHistory(prev => [...prev, { command: cmd, output: response }])
        setInput('')
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim()) return
        handleCommand(input)
    }

    // Scroll to bottom on entry
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight
        }
    }, [history, isMatrix])

    // Matrix Rain Effect code
    useEffect(() => {
        if (!isMatrix || !canvasRef.current) return
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number

        const resizeCanvas = () => {
            canvas.width = canvas.parentElement?.clientWidth || 600
            canvas.height = 180
        }
        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        const matrix = "🚀⚡🌐💻🧠🌿0101010101101010"
        const alphabet = matrix.split("")
        const fontSize = 11
        const columns = canvas.width / fontSize
        const rainDrops: number[] = Array.from({ length: columns }).fill(1) as number[]

        const draw = () => {
            ctx.fillStyle = "rgba(12, 18, 34, 0.05)"
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            ctx.fillStyle = "#38bdf8"
            ctx.font = fontSize + "px monospace"

            for (let i = 0; i < rainDrops.length; i++) {
                const text = alphabet[Math.floor(Math.random() * alphabet.length)]
                ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize)

                if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    rainDrops[i] = 0
                }
                rainDrops[i]++
            }
        }

        const interval = setInterval(draw, 35)

        // ESC key handler to exit matrix mode
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsMatrix(false)
            }
        }
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            clearInterval(interval)
            window.removeEventListener('resize', resizeCanvas)
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isMatrix])

    return (
        <div 
            className="w-full bg-navy-blue/90 border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col mt-6 font-mono text-left"
            onClick={() => inputRef.current?.focus()}
        >
            {/* Header top bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/10 select-none">
                <div className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue" />
                    <span className="text-[10px] text-lightest-slate/80 tracking-wider uppercase font-bold">developer-sandbox-cli</span>
                </div>
                <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
            </div>

            {/* Content area */}
            <div 
                ref={containerRef}
                className="p-4 h-48 overflow-y-auto space-y-3 scrollbar-none relative"
            >
                {isMatrix ? (
                    <div className="absolute inset-0 z-0 bg-[#0c1222]">
                        <canvas ref={canvasRef} className="block w-full h-full" />
                        <button 
                            onClick={() => setIsMatrix(false)}
                            className="absolute bottom-2 right-2 z-10 px-2.5 py-1 text-[9px] bg-blue text-navy-blue font-bold rounded hover:bg-blue/80 transition-colors flex items-center gap-1"
                        >
                            <RefreshCw className="w-3 h-3 animate-spin" /> Exit Matrix
                        </button>
                    </div>
                ) : (
                    <>
                        {history.map((entry, idx) => (
                            <div key={idx} className="space-y-1.5">
                                {entry.command !== 'system-init' && (
                                    <div className="flex items-center gap-2 text-xs text-white/90">
                                        <span className="text-blue select-none">❯</span>
                                        <span>{entry.command}</span>
                                    </div>
                                )}
                                <div className="pl-4">{entry.output}</div>
                            </div>
                        ))}
                    </>
                )}
            </div>

            {/* Input field */}
            {!isMatrix && (
                <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-3 bg-white/[0.02] border-t border-white/5">
                    <span className="text-blue text-xs select-none">❯</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type 'help'..."
                        className="bg-transparent border-none outline-none text-xs text-white placeholder-lightest-slate/30 flex-grow font-mono"
                        autoComplete="off"
                        autoCapitalize="off"
                    />
                    <button type="submit" className="hidden" />
                </form>
            )}
        </div>
    )
}

export default TerminalConsole
