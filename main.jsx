import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#000000] text-[#FFFFFF] flex items-center justify-center p-6 font-mono">
          <div className="max-w-md w-full p-6 rounded-2xl bg-[#0D0D0D] border border-[#FF453A] shadow-[0_0_30px_rgba(255,69,58,0.2)] text-center">
            <div className="w-3 h-3 rounded-full bg-[#FF453A] animate-ping mx-auto mb-4" />
            <h2 className="text-lg font-bold text-white mb-2">INITIALIZING PORTFOLIO</h2>
            <p className="text-xs text-[#B3B3B3] mb-4">
              {this.state.error?.message || 'Recovering session interface...'}
            </p>
            <button
              onClick={() => { window.location.href = '/'; }}
              className="px-4 py-2 rounded-lg bg-[#FF453A] text-black font-bold text-xs hover:bg-[#E03E34] transition-colors"
            >
              Reset Session
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)

