// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { authenticate } from "./authenticate";
import { HelloWorldPanel } from "./HelloWorldPanel";
import { SidebarProvider } from "./SidebarProvider";
import { TokenManager } from "./TokenManager";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

  TokenManager.globalState = context.globalState;
  console.log("Token Value is : ", TokenManager.getToken());

  console.log('Congratulations, your extension "taskninja" is now active!');

  const item = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right
  );
  item.text = "$(add) Add Task to Ninja";
  item.command = "taskninja.addTask";
  item.show();

  const sidebarProvider = new SidebarProvider(context.extensionUri);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      "taskninja-sidebar",
      sidebarProvider
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("taskninja.helloWorld", () => {
      // vscode.window.showInformationMessage("Hello from TaskNinja!");
      HelloWorldPanel.createOrShow(context.extensionUri);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("taskninja.authenticateUser", () => {
      try {
        authenticate;
      } catch (err) {
        console.log(err);
      }
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("taskninja.addTask", () => {
      const { activeTextEditor } = vscode.window;

      if (!activeTextEditor) {
        vscode.window.showInformationMessage("No active text editor");
        return;
      }

      const text = activeTextEditor.document.getText(
        activeTextEditor.selection
      );
      // vscode.window.showInformationMessage(`Selected text: ${text}`);

      sidebarProvider._view?.webview.postMessage({
        type: "new-todo",
        value: text,
      });
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("taskninja.refresh", async () => {
      // HelloWorldPanel.kill();
      // HelloWorldPanel.createOrShow(context.extensionUri);
      await vscode.commands.executeCommand("workbench.action.closeSidebar");
      await vscode.commands.executeCommand(
        "workbench.view.extension.taskNinja-sidebar-view"
      );
      // setTimeout(() => {
      //   vscode.commands.executeCommand(
      //     "workbench.action.webview.openDeveloperTools"
      //   );
      // }, 500);
    })
  );

  vscode.commands.registerCommand("taskninja.askQuestion", async () => {
    const answer = await vscode.window.showInformationMessage(
      "How was your day?",
      "Good",
      "Bad"
    );

    if (answer === "Good") {
      vscode.window.showInformationMessage("Glad to hear it!");
    } else if (answer === "Bad") {
      vscode.window.showInformationMessage("Sorry to hear that.");
    }
  });
}

// This method is called when your extension is deactivated
export function deactivate() {}
