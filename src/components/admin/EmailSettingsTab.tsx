import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Plus, Trash2, Save, Loader2, CheckCircle2 } from 'lucide-react';
import { SERVER_URL } from '../../services/api';

interface EmailSettingsTabProps {
  showToast: (message: string, type: 'success' | 'error') => void;
}

export default function EmailSettingsTab({ showToast }: EmailSettingsTabProps) {
  const [adminEmails, setAdminEmails] = useState<string[]>([]);
  const [newEmail, setNewEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchEmailSettings();
  }, []);

  const fetchEmailSettings = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('pixel_token');
      const response = await fetch(`${SERVER_URL}/api/admin/email-settings`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) throw new Error('Error al cargar configuración');
      
      const data = await response.json();
      setAdminEmails(data.adminEmails || []);
    } catch (error) {
      console.error('Error fetching email settings:', error);
      showToast('Error al cargar configuración de correos', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const addEmail = () => {
    if (!newEmail.trim()) {
      showToast('Ingresa un correo', 'error');
      return;
    }

    if (!validateEmail(newEmail)) {
      showToast('Correo inválido', 'error');
      return;
    }

    if (adminEmails.includes(newEmail)) {
      showToast('Este correo ya está agregado', 'error');
      return;
    }

    setAdminEmails([...adminEmails, newEmail]);
    setNewEmail('');
  };

  const removeEmail = (email: string) => {
    setAdminEmails(adminEmails.filter(e => e !== email));
  };

  const saveSettings = async () => {
    setIsSaving(true);
    try {
      const token = localStorage.getItem('pixel_token');
      const response = await fetch(`${SERVER_URL}/api/admin/email-settings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ adminEmails })
      });

      if (!response.ok) throw new Error('Error al guardar');

      showToast('Configuración guardada correctamente', 'success');
    } catch (error) {
      console.error('Error saving email settings:', error);
      showToast('Error al guardar configuración', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-yellow-500" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Mail className="w-6 h-6 text-yellow-500" />
            Configuración de Correos
          </h2>
          <p className="text-gray-400 mt-1">
            Configura los correos que recibirán notificaciones de nuevas órdenes
          </p>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-gray-300">
            <p className="font-semibold text-white mb-1">¿Cómo funciona?</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Los correos agregados recibirán notificaciones cuando se cree una nueva orden</li>
              <li>Los usuarios recibirán confirmación automática al crear su orden</li>
              <li>Se enviarán actualizaciones cuando la orden se complete o cancele</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Add Email Form */}
      <div className="bg-white/5 rounded-lg p-6 border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">Agregar Correo</h3>
        <div className="flex gap-3">
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addEmail()}
            placeholder="correo@ejemplo.com"
            className="flex-1 bg-black/30 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={addEmail}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg font-semibold flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Agregar
          </motion.button>
        </div>
      </div>

      {/* Email List */}
      <div className="bg-white/5 rounded-lg p-6 border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">
          Correos Configurados ({adminEmails.length})
        </h3>
        
        {adminEmails.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <Mail className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>No hay correos configurados</p>
            <p className="text-sm mt-1">Agrega un correo para recibir notificaciones</p>
          </div>
        ) : (
          <div className="space-y-2">
            {adminEmails.map((email, index) => (
              <motion.div
                key={email}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between bg-black/30 rounded-lg p-4 border border-white/5"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-yellow-500" />
                  <span className="text-white font-medium">{email}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => removeEmail(email)}
                  className="text-red-400 hover:text-red-300 p-2 rounded-lg hover:bg-red-500/10"
                >
                  <Trash2 className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={saveSettings}
          disabled={isSaving}
          className="bg-green-500 hover:bg-green-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
        >
          {isSaving ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Guardando...
            </>
          ) : (
            <>
              <Save className="w-5 h-5" />
              Guardar Configuración
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
}
