### **Experiment 6: Conditional Rendering (Toggle Component)** (CO3)  
- **Objective:** Show or hide a component using a button.  
- **Task:** Toggle a message on button click.  
- **Pseudo Code:**  
Step 1: const [show, setShow] = useState(true)
Step 2: Add button → onClick={ () => setShow(!show) }
Step 3: If show is true → display <p>Hello!</p>
Else → display nothing
