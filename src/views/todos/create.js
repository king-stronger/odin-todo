function generateTodoForm(){
    return `    
        <form action="" class="form todo-form">
            <div class="form-body">
                <input type="text" name="todo-title-input" id="todo-title-input" 
                    placeholder="Ajoute un titre pour ta tache" class="todo-title-input">
                <textarea name="todo-description-input" id="" class="todo-description-input"
                    placeholder="Ajoute une description pour ta tache"></textarea>
                <div>
                    <select name="todo-priority-input" id="todo-priority-input" class="todo-priority-input">
                        <option disabled selected>Priority</option>
                        <option value="1">High</option>
                        <option value="2">Medium</option>
                        <option value="3">Low</option>
                    </select>
                </div>
            </div>
            
            <div class="form-footer">
                <button class="button btn-secondary close-medal">Annuler</button>
                <button type="submit" class="button btn-primary">Ajouter une tache</button>
            </div>
        </form>
    `;
}

export { generateTodoForm }