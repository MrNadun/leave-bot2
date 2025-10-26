# Leave Management Bot - BuyMore Technical Team

## Overview
This is a WhatsApp bot with a web-based admin panel for managing employee leave requests. The system consists of two main components:
1. **WhatsApp Bot** - Handles leave requests via WhatsApp
2. **Web Dashboard** - Admin panel for viewing and managing leaves with PDF export

## Recent Changes (October 25, 2025)
- ✅ Fixed all database issues in kyami.js
- ✅ Created leave.json database file with proper structure
- ✅ Fixed all command handlers (approve, reject, approvehalf, rejecthalf, leavelog)
- ✅ Created Express web dashboard on port 5000
- ✅ Implemented monthly leave view with filtering
- ✅ Added PDF export functionality for leave reports
- ✅ Setup dual workflows (WhatsApp Bot + Web Dashboard)
- ✅ Fixed critical deletion bug - now uses stable identifiers (user+date/time) instead of array indexes
- ✅ All architect reviews passed successfully

## Project Architecture

### WhatsApp Bot
- **Entry Point**: `index.js`
- **Main Logic**: `kyami.js`
- **Config**: `config.js`
- **Database**: `database/leave.json`
- **Session**: `session/` folder (contains WhatsApp authentication)

### Web Dashboard
- **Server**: `server.js` (Express on port 5000)
- **Views**: `views/dashboard.ejs`
- **Features**:
  - Monthly leave statistics
  - Filter by year and month
  - Download PDF reports
  - Delete leave records
  - View full and half day leaves

### Database Structure
```json
{
  "fullLeaves": [
    {
      "user": "phone@s.whatsapp.net",
      "name": "User Name",
      "date": "2025.10.25",
      "status": "pending|approved|rejected",
      "requestedAt": "ISO timestamp",
      "approvedAt": "ISO timestamp",
      "approvedBy": "approver_phone@s.whatsapp.net"
    }
  ],
  "halfLeaves": [
    {
      "user": "phone@s.whatsapp.net",
      "name": "User Name",
      "time": "09:00 AM",
      "status": "pending|approved|rejected",
      "requestedAt": "ISO timestamp"
    }
  ]
}
```

## WhatsApp Bot Commands

### User Commands
- `.menu` or `.help` - Show command list
- `.leave` or `.l` - Request a full day leave
- `.halfleave` or `.hl` - Request a half day leave

### Owner Commands (Only for authorized users)
- `.approve` - Approve pending leave request
- `.reject` - Reject pending leave request
- `.approvehalf` - Approve half day leave
- `.rejecthalf` - Reject half day leave
- `.leavelog` or `.ll` - View all leave records
- `.public` - Make bot work in all chats
- `.self` - Make bot work only in private chats
- `.addprem` - Add premium user
- `.delprem` - Remove premium user
- `.tagall` - Tag all group members
- `.hidetag` or `.h` - Tag all members invisibly

### Other Commands
- `.owner` - Show owner contact
- `.sticker` or `.s` - Convert image/video to sticker
- `.rvo` - Read view-once messages
- `.tourl` - Convert image to URL

## Workflows

### 1. Web Dashboard
- **Command**: `node server.js`
- **Port**: 5000
- **URL**: Available in Replit webview
- **Purpose**: Admin panel for leave management

### 2. WhatsApp Bot
- **Command**: `node index.js`
- **Purpose**: WhatsApp bot service
- **Note**: Requires WhatsApp pairing code on first run

## Accessing the Services

### Web Dashboard
- Click on the Webview tab in Replit
- Or access directly at the Replit preview URL
- Filter leaves by month/year
- Download PDF reports
- View statistics

### WhatsApp Bot
- First run: Enter phone number when prompted
- Use the pairing code provided in console
- Bot will connect to WhatsApp
- Users can send commands via WhatsApp

## Owner Configuration
Update owners in `config.js`:
```javascript
global.owner = ["94760405102", "94717668904"];
```

## Dependencies
- @whiskeysockets/baileys - WhatsApp connection
- express - Web server
- ejs - Template engine
- pdfkit - PDF generation
- body-parser - Request parsing
- cors - Cross-origin support
- axios - HTTP requests
- moment-timezone - Date/time handling

## Notes
- Session data is stored in `session/` folder
- Leave database is in `database/leave.json`
- Premium users stored in `lib/database/premium.json`
- Owner list in `lib/database/owner.json`
- Both services run simultaneously
- Web dashboard is always accessible on port 5000
