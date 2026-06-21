'use client';

import { FormEvent } from 'react';

interface Solicitacao {
  id: number;
  nome: string;
  contato: string;
  tipoAula: string;
  descricao: string;
  status: string;
}

interface SolicitacaoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (solicitacao: Solicitacao) => void;
}

export default function SolicitacaoModal({ isOpen, onClose, onAdd }: SolicitacaoModalProps) {
  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const novaSolicitacao: Solicitacao = {
      id: Date.now(),
      nome: formData.get('nome') as string,
      contato: formData.get('contato') as string,
      tipoAula: formData.get('tipoAula') as string,
      descricao: formData.get('descricao') as string,
      status: 'Enviada',
    };

    onAdd(novaSolicitacao);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{ background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(6px)' }}
    >
      <div
        className="w-full max-w-md overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)',
          border: '1px solid rgba(255,255,255,0.10)',
          borderRadius: '20px',
          boxShadow: '0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,107,0,0.08)',
        }}
      >
        {/* Header */}
        <div
          className="px-6 py-5 flex justify-between items-center"
          style={{
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            background: 'linear-gradient(180deg, rgba(255,107,0,0.10) 0%, transparent 100%)',
          }}
        >
          <div className="flex items-center gap-3">
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: 'rgba(255,107,0,0.15)',
                border: '1px solid rgba(255,107,0,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ff6b00',
                fontSize: 17,
              }}
            >
              {/* ícone — troque por qualquer SVG/lucide que preferir */}
              ✦
            </div>
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: '#f1f5f9', letterSpacing: '-0.2px' }}>
                Nova Solicitação
              </h3>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)', marginTop: 1 }}>
                Encontre seu personal ideal
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              width: 30,
              height: 30,
              borderRadius: 8,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.45)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
          {/* Nome */}
          <div className="flex flex-col gap-1.5">
            <label style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
              Seu nome
            </label>
            <input
              name="nome"
              type="text"
              required
              placeholder="Como devemos te chamar?"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: 10,
                padding: '10px 13px',
                color: '#e2e8f0',
                fontSize: 14,
                outline: 'none',
              }}
            />
          </div>

          {/* Contato */}
          <div className="flex flex-col gap-1.5">
            <label className="flex items-center gap-2" style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
              Contato
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: '1px 6px', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>
                opcional
              </span>
            </label>
            <input
              name="contato"
              type="text"
              placeholder="WhatsApp ou e-mail"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: 10,
                padding: '10px 13px',
                color: '#e2e8f0',
                fontSize: 14,
                outline: 'none',
              }}
            />
          </div>

          {/* Tipo de Aula */}
          <div className="flex flex-col gap-1.5">
            <label style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
              Tipo de aula
            </label>
            <input
              name="tipoAula"
              type="text"
              required
              placeholder="Ex: Musculação, Funcional, HIIT…"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: 10,
                padding: '10px 13px',
                color: '#e2e8f0',
                fontSize: 14,
                outline: 'none',
              }}
            />
          </div>

          {/* Descrição */}
          <div className="flex flex-col gap-1.5">
            <label style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
              Descrição
            </label>
            <textarea
              name="descricao"
              rows={3}
              required
              placeholder="Seus objetivos, disponibilidade de horário…"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: 10,
                padding: '10px 13px',
                color: '#e2e8f0',
                fontSize: 14,
                outline: 'none',
                resize: 'none',
                lineHeight: 1.5,
                fontFamily: 'inherit',
              }}
            />
          </div>

          {/* Footer */}
          <div
            className="flex items-center justify-between pt-2 mt-2"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            {/* Status pill */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 12,
                color: '#00c853',
                background: 'rgba(0,200,83,0.08)',
                border: '1px solid rgba(0,200,83,0.18)',
                borderRadius: 20,
                padding: '4px 10px',
                fontWeight: 500,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  background: '#00c853',
                  borderRadius: '50%',
                  display: 'inline-block',
                }}
              />
              Status: Enviada
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                style={{
                  padding: '9px 16px',
                  borderRadius: 10,
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.10)',
                  color: 'rgba(255,255,255,0.45)',
                  fontSize: 13,
                  cursor: 'pointer',
                }}
              >
                Fechar
              </button>
              <button
                type="submit"
                style={{
                  padding: '9px 20px',
                  borderRadius: 10,
                  background: '#ff6b00',
                  border: 'none',
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(255,107,0,0.28)',
                }}
              >
                Enviar solicitação
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}