import { useState } from "react";
import { Receipt, Info } from "lucide-react";

export default function TaxSettings() {
  const [vatEnabled, setVatEnabled] = useState(true);
  const [vatRate, setVatRate] = useState(10);
  const [serviceChargeEnabled, setServiceChargeEnabled] = useState(true);
  const [serviceChargeRate, setServiceChargeRate] = useState(5);
  const [municipalTaxEnabled, setMunicipalTaxEnabled] = useState(false);
  const [municipalTaxRate, setMunicipalTaxRate] = useState(2);

  // Example bill calculation
  const exampleSubtotal = 100.0;
  const vatAmount = vatEnabled ? (exampleSubtotal * vatRate) / 100 : 0;
  const serviceChargeAmount = serviceChargeEnabled
    ? (exampleSubtotal * serviceChargeRate) / 100
    : 0;
  const municipalTaxAmount = municipalTaxEnabled
    ? (exampleSubtotal * municipalTaxRate) / 100
    : 0;
  const totalAmount =
    exampleSubtotal + vatAmount + serviceChargeAmount + municipalTaxAmount;

  return (
    <div className="h-screen bg-black p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Tax Settings</h1>
        <p className="text-zinc-400">Configure tax rates and billing charges</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Tax Configuration Panel */}
        <div className="space-y-4">
          {/* VAT */}
          <div className="bg-zinc-900 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-medium mb-1">Value Added Tax (VAT)</h3>
                <p className="text-sm text-zinc-400">
                  Standard sales tax applied to all items
                </p>
              </div>
              <button
                onClick={() => setVatEnabled(!vatEnabled)}
                className={`relative w-14 h-8 rounded-full transition-all ${
                  vatEnabled ? "bg-green-500" : "bg-zinc-700"
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-all ${
                    vatEnabled ? "left-7" : "left-1"
                  }`}
                />
              </button>
            </div>

            {vatEnabled && (
              <div>
                <label className="text-sm text-zinc-400 block mb-2">
                  Tax Rate (%)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="25"
                    step="0.5"
                    value={vatRate}
                    onChange={(e) => setVatRate(parseFloat(e.target.value))}
                    className="flex-1"
                  />
                  <div className="w-20 bg-zinc-800 rounded-lg px-4 py-2 text-center font-medium">
                    {vatRate}%
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Service Charge */}
          <div className="bg-zinc-900 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-medium mb-1">Service Charge</h3>
                <p className="text-sm text-zinc-400">
                  Additional charge for table service
                </p>
              </div>
              <button
                onClick={() =>
                  setServiceChargeEnabled(!serviceChargeEnabled)
                }
                className={`relative w-14 h-8 rounded-full transition-all ${
                  serviceChargeEnabled ? "bg-green-500" : "bg-zinc-700"
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-all ${
                    serviceChargeEnabled ? "left-7" : "left-1"
                  }`}
                />
              </button>
            </div>

            {serviceChargeEnabled && (
              <div>
                <label className="text-sm text-zinc-400 block mb-2">
                  Charge Rate (%)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="20"
                    step="0.5"
                    value={serviceChargeRate}
                    onChange={(e) =>
                      setServiceChargeRate(parseFloat(e.target.value))
                    }
                    className="flex-1"
                  />
                  <div className="w-20 bg-zinc-800 rounded-lg px-4 py-2 text-center font-medium">
                    {serviceChargeRate}%
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Municipal Tax */}
          <div className="bg-zinc-900 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-medium mb-1">Municipal Tax</h3>
                <p className="text-sm text-zinc-400">
                  Local government tax (if applicable)
                </p>
              </div>
              <button
                onClick={() =>
                  setMunicipalTaxEnabled(!municipalTaxEnabled)
                }
                className={`relative w-14 h-8 rounded-full transition-all ${
                  municipalTaxEnabled ? "bg-green-500" : "bg-zinc-700"
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-all ${
                    municipalTaxEnabled ? "left-7" : "left-1"
                  }`}
                />
              </button>
            </div>

            {municipalTaxEnabled && (
              <div>
                <label className="text-sm text-zinc-400 block mb-2">
                  Tax Rate (%)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.5"
                    value={municipalTaxRate}
                    onChange={(e) =>
                      setMunicipalTaxRate(parseFloat(e.target.value))
                    }
                    className="flex-1"
                  />
                  <div className="w-20 bg-zinc-800 rounded-lg px-4 py-2 text-center font-medium">
                    {municipalTaxRate}%
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Info Notice */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
            <div className="flex gap-3">
              <Info size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-500 mb-1">
                  Tax Configuration
                </h4>
                <p className="text-sm text-blue-400/80">
                  Changes to tax settings will apply to all new orders. Existing
                  orders will retain their original tax rates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bill Preview Panel */}
        <div className="bg-zinc-900 rounded-2xl p-6 h-fit sticky top-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
              <Receipt size={24} className="text-white" />
            </div>
            <div>
              <h3 className="font-medium">Bill Preview</h3>
              <p className="text-sm text-zinc-400">Example calculation</p>
            </div>
          </div>

          <div className="bg-zinc-800 rounded-xl p-6 space-y-4">
            {/* Subtotal */}
            <div className="flex justify-between pb-4 border-b border-zinc-700">
              <span className="text-zinc-400">Subtotal</span>
              <span className="font-medium">
                ${exampleSubtotal.toFixed(2)}
              </span>
            </div>

            {/* VAT */}
            {vatEnabled && (
              <div className="flex justify-between">
                <span className="text-zinc-400">
                  VAT ({vatRate}%)
                </span>
                <span className="text-green-500 font-medium">
                  +${vatAmount.toFixed(2)}
                </span>
              </div>
            )}

            {/* Service Charge */}
            {serviceChargeEnabled && (
              <div className="flex justify-between">
                <span className="text-zinc-400">
                  Service Charge ({serviceChargeRate}%)
                </span>
                <span className="text-green-500 font-medium">
                  +${serviceChargeAmount.toFixed(2)}
                </span>
              </div>
            )}

            {/* Municipal Tax */}
            {municipalTaxEnabled && (
              <div className="flex justify-between">
                <span className="text-zinc-400">
                  Municipal Tax ({municipalTaxRate}%)
                </span>
                <span className="text-green-500 font-medium">
                  +${municipalTaxAmount.toFixed(2)}
                </span>
              </div>
            )}

            {/* Total */}
            <div className="flex justify-between pt-4 border-t border-zinc-700">
              <span className="text-xl font-bold">Total</span>
              <span className="text-xl font-bold">
                ${totalAmount.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            <div className="bg-zinc-800 rounded-xl p-4">
              <p className="text-xs text-zinc-400 mb-1">Active Charges</p>
              <p className="text-2xl font-bold">
                {[
                  vatEnabled,
                  serviceChargeEnabled,
                  municipalTaxEnabled,
                ].filter(Boolean).length}
              </p>
            </div>
            <div className="bg-zinc-800 rounded-xl p-4">
              <p className="text-xs text-zinc-400 mb-1">Total Tax Rate</p>
              <p className="text-2xl font-bold">
                {(
                  (vatEnabled ? vatRate : 0) +
                  (serviceChargeEnabled ? serviceChargeRate : 0) +
                  (municipalTaxEnabled ? municipalTaxRate : 0)
                ).toFixed(1)}
                %
              </p>
            </div>
          </div>

          {/* Save Button */}
          <button className="w-full bg-white text-black font-bold py-3 rounded-xl mt-6 hover:bg-zinc-200 transition-all">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
