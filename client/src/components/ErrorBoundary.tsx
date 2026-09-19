import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught Error in Component Tree:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "32px", textAlign: "center", margin: "40px auto", maxWidth: "500px", background: "#fff", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
          <AlertCircle size={40} style={{ color: "#ef4444", marginBottom: "16px" }} />
          <h2 style={{ fontSize: "18px", margin: "0 0 8px 0", color: "#1f2937" }}>Something went wrong</h2>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "20px" }}>
            {this.state.error?.message || "An unexpected error occurred while rendering this component."}
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false, error: null });
              window.location.reload();
            }}
            style={{
              padding: "8px 16px",
              backgroundColor: "#0284c7",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: 500
            }}
          >
            <RefreshCw size={14} /> Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
