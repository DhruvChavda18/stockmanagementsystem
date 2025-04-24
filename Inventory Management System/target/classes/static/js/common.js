// Function to show confirmation dialog
function confirmDelete(event, message = 'Are you sure you want to delete this item?') {
    // Prevent the default link behavior
    event.preventDefault();
    
    // Get the URL from the clicked link
    const deleteUrl = event.currentTarget.getAttribute('href');
    
    // Create the modal container
    const modal = document.createElement('div');
    modal.className = 'delete-modal';
    modal.innerHTML = `
        <div class="delete-modal-content">
            <div class="delete-modal-header">
                <h3>Confirm Delete</h3>
                <button class="close-modal">&times;</button>
            </div>
            <div class="delete-modal-body">
                <p>${message}</p>
            </div>
            <div class="delete-modal-footer">
                <button class="cancel-btn">Cancel</button>
                <button class="confirm-btn">Delete</button>
            </div>
        </div>
    `;
    
    // Add the modal to the body
    document.body.appendChild(modal);
    
    // Add styles for the modal
    const style = document.createElement('style');
    style.textContent = `
        .delete-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        
        .delete-modal-content {
            background: white;
            padding: 1.5rem;
            border-radius: 0.5rem;
            width: 90%;
            max-width: 400px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .delete-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
        
        .delete-modal-header h3 {
            margin: 0;
            color: #1e293b;
            font-size: 1.25rem;
        }
        
        .close-modal {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #64748b;
        }
        
        .delete-modal-body {
            margin-bottom: 1.5rem;
        }
        
        .delete-modal-body p {
            color: #64748b;
            margin: 0;
        }
        
        .delete-modal-footer {
            display: flex;
            justify-content: flex-end;
            gap: 0.75rem;
        }
        
        .cancel-btn, .confirm-btn {
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
            font-size: 0.875rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .cancel-btn {
            background: #f1f5f9;
            color: #64748b;
            border: none;
        }
        
        .confirm-btn {
            background: #ef4444;
            color: white;
            border: none;
        }
        
        .cancel-btn:hover {
            background: #e2e8f0;
        }
        
        .confirm-btn:hover {
            background: #dc2626;
        }
    `;
    document.head.appendChild(style);
    
    // Handle close button click
    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
        document.head.removeChild(style);
    });
    
    // Handle cancel button click
    modal.querySelector('.cancel-btn').addEventListener('click', () => {
        document.body.removeChild(modal);
        document.head.removeChild(style);
    });
    
    // Handle confirm button click
    modal.querySelector('.confirm-btn').addEventListener('click', () => {
        window.location.href = deleteUrl;
    });
} 