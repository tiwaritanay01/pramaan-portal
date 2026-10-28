import React, { useState } from 'react';
import Header from './components/common/Header';
import Toast from './components/common/Toast';
import SignInView from './components/views/SignInView';
import CollegePortalView from './components/views/CollegePortalView';
import OfficerQueueView from './components/views/OfficerQueueView';
import InspectionConsoleView from './components/views/InspectionConsoleView';
import DecisionApprovalView from './components/views/DecisionApprovalView';
import HowItWorksView from './components/views/HowItWorksView';
import DocumentPreviewModal from './components/modals/DocumentPreviewModal';
import ExplanationModal from './components/modals/ExplanationModal';
import OrderCertificateModal from './components/modals/OrderCertificateModal';
import { ShieldAlert, ArrowRight, LogIn } from 'lucide-react';

import { 
  CURRENT_OFFICER, 
  CURRENT_COLLEGE, 
  WORKQUEUE_APPLICATIONS, 
  INSTITUTION_DOCUMENTS, 
  DISCREPANCY_ITEMS 
} from './data/mockData';

// Role-Based Access Control (RBAC) View Permissions Matrix
const ROLE_PERMISSIONS = {
  college: ['college-portal', 'how-it-works'],
  officer: ['officer-queue', 'inspection-console', 'decision-approval', 'how-it-works'],
};

export default function App() {
  // Authentication & RBAC State: Starts unauthenticated on the Login page
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeRole, setActiveRole] = useState(null); // 'college' | 'officer' | null
  const [activeView, setActiveView] = useState('sign-in'); // 'sign-in' | 'college-portal' | 'officer-queue' | 'inspection-console' | 'decision-approval' | 'how-it-works'
  
  const [officer, setOfficer] = useState(CURRENT_OFFICER);
  const [college, setCollege] = useState(CURRENT_COLLEGE);
  const [documents, setDocuments] = useState(INSTITUTION_DOCUMENTS);
  const [applications, setApplications] = useState(WORKQUEUE_APPLICATIONS);
  const [discrepancies] = useState(DISCREPANCY_ITEMS);

  // Modals state
  const [previewDocument, setPreviewDocument] = useState(null);
  const [explainingDocument, setExplainingDocument] = useState(null);
  const [signedOrderDetails, setSignedOrderDetails] = useState(null);

  // Toast state
  const [toast, setToast] = useState(null);

  const showToast = (title, message, type = 'success') => {
    setToast({ title, message, type });
    setTimeout(() => {
      setToast(null);
    }, 5000);
  };

  // Sign In handler (Enforces Role-Based Access Control)
  const handleSignInSuccess = (role) => {
    setIsAuthenticated(true);
    setActiveRole(role);
    if (role === 'college') {
      setActiveView('college-portal');
      showToast('Welcome, Principal Deshmukh', 'Authenticated to Pune Institute of Technology & Research (PID: 1-9028341).', 'success');
    } else {
      setActiveView('officer-queue');
      showToast('Welcome, Dr. R. Sharma', 'Authenticated to AICTE Western Regional Scrutiny Console (RO-419).', 'success');
    }
  };

  // Sign Out handler
  const handleSignOut = () => {
    setIsAuthenticated(false);
    setActiveRole(null);
    setActiveView('sign-in');
    showToast('Signed Out Successfully', 'You have been safely signed out of the portal.', 'info');
  };

  // RBAC Navigation guard
  const handleNavigate = (targetView) => {
    if (targetView === 'sign-in') {
      setActiveView('sign-in');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (targetView === 'how-it-works') {
      setActiveView('how-it-works');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (!isAuthenticated) {
      setActiveView('sign-in');
      showToast('Authentication Required', 'Please sign in to access protected portals.', 'warning');
      return;
    }

    const allowed = ROLE_PERMISSIONS[activeRole]?.includes(targetView);
    if (allowed) {
      setActiveView(targetView);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      showToast(
        'Access Denied (RBAC Policy Sec 4.2)',
        `Your logged-in role (${activeRole === 'officer' ? 'Scrutiny Officer' : 'Institutional College User'}) does not have permission to view this console.`,
        'error'
      );
    }
  };

  // College uploads or replaces a document
  const handleUploadDocument = (docId, fileName) => {
    setDocuments((prevDocs) =>
      prevDocs.map((doc) => {
        if (doc.id === docId) {
          return {
            ...doc,
            fileName: fileName || doc.fileName,
            status: 'verified',
            statusLabel: 'Verified (Updated)',
            statusColor: 'emerald',
            details: 'Fresh certificate uploaded and validated by automated registry cross-check.',
            comparison: {
              ...doc.comparison,
              official: 'Validated & Intact',
              note: 'Updated document satisfies current academic cycle requirements.',
            },
            hasAction: false,
          };
        }
        return doc;
      })
    );

    // Update college progress
    setCollege((prev) => ({
      ...prev,
      progress: {
        ...prev.progress,
        validated: Math.min(prev.progress.validated + 1, prev.progress.total),
        actionNeeded: Math.max(prev.progress.actionNeeded - 1, 0),
        percent: Math.min(prev.progress.percent + 6, 100),
      },
    }));

    showToast('Document Uploaded Successfully', `${fileName || 'Updated certificate'} received and validated.`, 'success');
  };

  // College submits explanation for a discrepancy
  const handleSubmitExplanation = ({ docId, explanation, fileName }) => {
    setDocuments((prevDocs) =>
      prevDocs.map((doc) => {
        if (doc.id === docId) {
          return {
            ...doc,
            fileName: fileName || doc.fileName,
            status: 'verified',
            statusLabel: 'Clarification Submitted',
            statusColor: 'emerald',
            details: `Institutional Explanation: "${explanation}" (Attached file: ${fileName})`,
            hasAction: false,
          };
        }
        return doc;
      })
    );

    showToast('Clarification Transmitted', 'Your formal explanation has been delivered directly to Officer Dr. R. Sharma.', 'success');
  };

  // College submits entire dossier (Remains strictly within the College Portal under RBAC)
  const handleSubmitDossier = () => {
    showToast(
      'Dossier Submitted to AICTE Desk', 
      'All 16 certificates forwarded to Western Regional Scrutiny Desk. Status: Stage 3 Scrutiny In Progress.', 
      'success'
    );
    setCollege((prev) => ({
      ...prev,
      approvalType: 'Annual Extension of Approval (EoA) - Dossier Submitted',
      progress: {
        ...prev.progress,
        percent: 100,
        pendingReview: prev.progress.pendingReview + prev.progress.actionNeeded,
        actionNeeded: 0,
      }
    }));
  };

  // Quick Approve from Officer Workqueue
  const handleQuickApprove = (app) => {
    setApplications((prev) =>
      prev.map((a) =>
        a.id === app.id
          ? { ...a, status: 'approved', statusLabel: 'Approval Order Sealed', statusColor: 'emerald', canQuickApprove: false }
          : a
      )
    );

    setOfficer((prev) => ({
      ...prev,
      approvedTodayCount: prev.approvedTodayCount + 1,
      assignedCount: Math.max(prev.assignedCount - 1, 0),
    }));

    showToast('Quick Approval Applied', `Application for ${app.collegeName} approved and digitally sealed under EoA 2026–27.`, 'success');
  };

  // Officer opens split-screen inspection
  const handleOpenInspection = (_app) => {
    handleNavigate('inspection-console');
  };

  // Officer resolves a specific discrepancy inside the inspection console
  const handleResolveDiscrepancy = (discId, resolutionType) => {
    if (resolutionType === 'cap_seats') {
      showToast('Seat Capacity Harmonized', 'Intake capped to 120 seats as validated by Savitribai Phule Pune University.', 'info');
    } else if (resolutionType === 'request_clarification') {
      showToast('Clarification Flagged', 'Marked for mandatory Sub-Registrar stamped lease submission in statutory order.', 'warning');
    } else if (resolutionType === 'flag_violation') {
      showToast('Violation Flagged', 'Added to statutory show-cause notice under AICTE Act Sec 10(k).', 'error');
    }
  };

  // Officer signs statutory decision
  const handleSignAndSubmitDecision = (orderDetails) => {
    setSignedOrderDetails(orderDetails);

    // Update queue application
    setApplications((prev) =>
      prev.map((a) =>
        a.collegeId === orderDetails.collegeId
          ? {
              ...a,
              status: orderDetails.decision.id === 'deficiency' ? 'waiting_reply' : 'ready_decision',
              statusLabel: orderDetails.decision.badge,
              statusColor: orderDetails.decision.badgeColor === 'blue' ? 'blue' : orderDetails.decision.badgeColor,
              problemSummary: `Statutory order dispatched: ${orderDetails.decision.label}`,
            }
          : a
      )
    );

    showToast(
      'Statutory Order Sealed & Dispatched',
      `Digital Signature ${orderDetails.dscId} applied. Reference: ${orderDetails.refNumber}.`,
      'success'
    );
  };

  // Verify RBAC access to requested view
  const isViewAuthorized = () => {
    if (activeView === 'sign-in' || activeView === 'how-it-works') return true;
    if (!isAuthenticated) return false;
    return ROLE_PERMISSIONS[activeRole]?.includes(activeView);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased flex flex-col selection:bg-blue-600 selection:text-white">
      
      {/* Top Fixed Application Navigation Bar (Strict RBAC Navigation, No cross-portal toggle button) */}
      <Header
        activeView={activeView}
        setActiveView={handleNavigate}
        activeRole={activeRole}
        isAuthenticated={isAuthenticated}
        onSignOut={handleSignOut}
        currentUser={officer}
        currentCollege={college}
      />

      {/* Main Content Area (offset by fixed header) */}
      <main className="flex-1 pt-16">
        
        {/* Unauthenticated or Explicit Sign In Screen */}
        {activeView === 'sign-in' && (
          <SignInView
            activeRole={activeRole}
            onSignInSuccess={handleSignInSuccess}
          />
        )}

        {/* Access Denied Guard if RBAC violated */}
        {!isViewAuthorized() && (
          <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-6 bg-slate-100">
            <div className="max-w-md w-full bg-white rounded-2xl border border-rose-200 shadow-md p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center mx-auto text-rose-600">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Access Restricted by RBAC</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                You do not have permission to access this internal console with your current role credentials.
              </p>
              <div className="pt-2">
                {!isAuthenticated ? (
                  <button
                    onClick={() => setActiveView('sign-in')}
                    className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Sign In with Appropriate Role</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveView(activeRole === 'officer' ? 'officer-queue' : 'college-portal')}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#0F2942] hover:bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Return to Authorized Dashboard</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Institutional User (College) Protected Portal */}
        {isViewAuthorized() && activeView === 'college-portal' && (
          <CollegePortalView
            currentCollege={college}
            documents={documents}
            onViewDocument={(doc) => setPreviewDocument(doc)}
            onOpenExplanation={(doc) => setExplainingDocument(doc)}
            onUploadDocument={handleUploadDocument}
            onSubmitDossier={handleSubmitDossier}
          />
        )}

        {/* Government Scrutiny Officer (Admin) Workqueue */}
        {isViewAuthorized() && activeView === 'officer-queue' && (
          <OfficerQueueView
            officer={officer}
            applications={applications}
            onOpenInspection={handleOpenInspection}
            onQuickApprove={handleQuickApprove}
            onNavigateToDecision={() => handleNavigate('decision-approval')}
          />
        )}

        {/* Government Scrutiny Officer (Admin) AI Inspection Console */}
        {isViewAuthorized() && activeView === 'inspection-console' && (
          <InspectionConsoleView
            currentCollege={college}
            discrepancies={discrepancies}
            documents={documents}
            onProceedToDecision={() => handleNavigate('decision-approval')}
            onResolveDiscrepancy={handleResolveDiscrepancy}
          />
        )}

        {/* Government Scrutiny Officer (Admin) Statutory Decision & DSC Signing */}
        {isViewAuthorized() && activeView === 'decision-approval' && (
          <DecisionApprovalView
            currentCollege={college}
            officer={officer}
            onSignAndSubmitDecision={handleSignAndSubmitDecision}
            onBackToInspection={() => handleNavigate('inspection-console')}
          />
        )}

        {/* Public & Role-Aware Explanatory Guide */}
        {isViewAuthorized() && activeView === 'how-it-works' && (
          <HowItWorksView
            isAuthenticated={isAuthenticated}
            activeRole={activeRole}
            onNavigateToView={handleNavigate}
          />
        )}
      </main>

      {/* Global Interactive Modals */}
      {previewDocument && (
        <DocumentPreviewModal
          document={previewDocument}
          onClose={() => setPreviewDocument(null)}
          onOpenExplanation={(doc) => setExplainingDocument(doc)}
        />
      )}

      {explainingDocument && (
        <ExplanationModal
          document={explainingDocument}
          onClose={() => setExplainingDocument(null)}
          onSubmitExplanation={handleSubmitExplanation}
        />
      )}

      {signedOrderDetails && (
        <OrderCertificateModal
          orderDetails={signedOrderDetails}
          onClose={() => setSignedOrderDetails(null)}
          onCopyNotice={() => {
            navigator.clipboard.writeText(signedOrderDetails.letterText);
            showToast('Dispatch Copied', 'Official notice text copied to clipboard.', 'info');
          }}
        />
      )}

      {/* Non-intrusive Alert Toast */}
      <Toast toast={toast} onClose={() => setToast(null)} />

    </div>
  );
}
