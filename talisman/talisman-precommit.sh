echo "Copies Talisman pre-commit hook to .git folder"
file='../.git/hooks/bin/talisman'

if [ ! -f "$file" ]
then
    echo 'Copying Talisman bin to your git hooks binary folder'
    mkdir -p .git/hooks/bin
    cp ./talisman/talisman .git/hooks/bin/
    chmod -R 777 .git/hooks/bin/
else
    echo 'Talisman Binary is already set up.'
fi
