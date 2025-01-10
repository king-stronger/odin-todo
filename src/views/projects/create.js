function generateProjectForm(){
    return `
        <form action="" class="form project-form form-modal">
            <div class="form-header">
                <span class="text-md">Ajouter un projet</span>
                <button class="link close-modal">X</button>
            </div>
            
            <div class="form-body">
                <div class="flow">
                    <label for="project-name-input">Nom</label>
                    <input type="text" name="project-name">
                </div>
            </div>
        
            <div class="form-footer">
                <button class="button btn-secondary close-modal">Annuler</button>
                <button type="submit" class="button btn-primary">Envoyer</button>
            </div>
        </form>   
    `;
}