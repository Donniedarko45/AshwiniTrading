import React, { useState, useEffect, useRef } from 'react';
import { RefreshCw, CheckCircle2, Lock } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SecurityCaptchaProps {
  onVerify: (isVerified: boolean) => void;
  theme?: 'light' | 'dark';
  error?: string | null;
  idPrefix?: string;
}

export function SecurityCaptcha({
  onVerify,
  theme = 'light',
  error,
  idPrefix = 'sec'
}: SecurityCaptchaProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [captchaCode, setCaptchaCode] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const isLight = theme === 'light';

  // Generate random 5-character alphanumeric string excluding ambiguous characters (0, O, 1, I, l)
  const generateCode = (): string => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz';
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  // Draw distorted noise canvas image
  const drawCaptcha = (code: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Background gradient
    const bgGrad = ctx.createLinearGradient(0, 0, width, height);
    if (isLight) {
      bgGrad.addColorStop(0, '#f1f5f9');
      bgGrad.addColorStop(1, '#e2e8f0');
    } else {
      bgGrad.addColorStop(0, '#0f172a');
      bgGrad.addColorStop(1, '#1e293b');
    }
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Noise dots
    for (let i = 0; i < 35; i++) {
      ctx.fillStyle = isLight ? `rgba(100,116,139,${Math.random() * 0.3 + 0.1})` : `rgba(255,255,255,${Math.random() * 0.2 + 0.05})`;
      ctx.beginPath();
      ctx.arc(Math.random() * width, Math.random() * height, Math.random() * 1.8, 0, Math.PI * 2);
      ctx.fill();
    }

    // Noise curved lines
    for (let i = 0; i < 3; i++) {
      ctx.strokeStyle = isLight ? `rgba(201,162,39,${Math.random() * 0.5 + 0.3})` : `rgba(201,162,39,${Math.random() * 0.5 + 0.3})`;
      ctx.lineWidth = Math.random() * 1.5 + 0.8;
      ctx.beginPath();
      ctx.moveTo(Math.random() * width, Math.random() * height);
      ctx.bezierCurveTo(
        Math.random() * width, Math.random() * height,
        Math.random() * width, Math.random() * height,
        Math.random() * width, Math.random() * height
      );
      ctx.stroke();
    }

    // Draw characters with random rotation, scale, and offset
    const letterSpacing = width / (code.length + 1);
    ctx.font = 'bold 20px monospace, sans-serif';
    ctx.textBaseline = 'middle';

    for (let i = 0; i < code.length; i++) {
      const char = code[i];
      ctx.save();
      const x = letterSpacing * (i + 1);
      const y = height / 2 + (Math.random() * 4 - 2);
      const angle = (Math.random() * 36 - 18) * (Math.PI / 180);

      ctx.translate(x, y);
      ctx.rotate(angle);

      ctx.fillStyle = isLight
        ? (i % 2 === 0 ? '#0f172a' : '#1e3a8a')
        : (i % 2 === 0 ? '#fbbf24' : '#ffffff');
      ctx.shadowColor = isLight ? 'rgba(0,0,0,0.1)' : 'rgba(201,162,39,0.3)';
      ctx.shadowBlur = 3;

      ctx.fillText(char, -6, 0);
      ctx.restore();
    }
  };

  const refresh = () => {
    const newCode = generateCode();
    setCaptchaCode(newCode);
    setUserInput('');
    setIsVerified(false);
    onVerify(false);
    setTimeout(() => drawCaptcha(newCode), 50);
  };

  useEffect(() => {
    refresh();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setUserInput(val);
    const valid = val.trim().toLowerCase() === captchaCode.toLowerCase();
    setIsVerified(valid);
    onVerify(valid);
  };

  return (
    <div className="space-y-1.5 text-left">
      <div className="flex items-center justify-between pl-1">
        <label htmlFor={`${idPrefix}-captcha-input`} className={`text-xs font-bold flex items-center gap-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
          <Lock className="w-3.5 h-3.5 text-brand-primary" />
          Security Captcha *
        </label>
        <button
          type="button"
          onClick={refresh}
          className={`text-[11px] font-semibold flex items-center gap-1 cursor-pointer transition-colors ${isLight ? 'text-slate-500 hover:text-brand-navy' : 'text-slate-400 hover:text-white'}`}
          title="Refresh Captcha Image"
        >
          <RefreshCw className="w-3 h-3" />
          Refresh
        </button>
      </div>

      <div className="flex items-center gap-2">
        {/* Canvas Visual Distortion Box */}
        <div 
          onClick={refresh}
          className={`relative shrink-0 rounded-xl overflow-hidden border cursor-pointer select-none transition-transform active:scale-95 ${isLight ? 'border-slate-300 shadow-sm hover:border-brand-primary' : 'border-white/20 hover:border-brand-primary'}`}
          title="Click to refresh captcha"
        >
          <canvas
            ref={canvasRef}
            width={130}
            height={44}
            className="block"
          />
        </div>

        {/* User Input Field */}
        <div className={`flex-1 relative transition-all duration-200 rounded-xl border bg-slate-50/50 ${isVerified ? 'border-brand-success ring-2 ring-brand-success/20' : error ? 'border-brand-error' : isLight ? 'border-slate-200 hover:border-slate-300 focus-within:border-brand-primary' : 'border-white/10 hover:border-white/20 focus-within:border-brand-primary'}`}>
          <Input
            id={`${idPrefix}-captcha-input`}
            type="text"
            autoComplete="off"
            autoCorrect="off"
            placeholder="Type code"
            value={userInput}
            onChange={handleInputChange}
            maxLength={6}
            className={`h-11 text-sm font-mono font-bold tracking-wider rounded-xl bg-transparent border-0 focus-visible:ring-0 px-3.5 pr-8 ${isLight ? 'text-brand-navy placeholder:text-slate-400' : 'text-white placeholder:text-slate-500'}`}
          />
          {isVerified && (
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 text-brand-success flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 fill-brand-success text-white" />
            </div>
          )}
        </div>
      </div>
      {error && !isVerified && <span className="text-xs font-medium text-brand-error pl-1 block">{error}</span>}
    </div>
  );
}
