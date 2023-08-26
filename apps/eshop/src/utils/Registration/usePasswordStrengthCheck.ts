interface PasswordStrengthCheckResult {
    containerClassName: 'null' | 'weak' | 'medium' | 'strong'
}

interface LocalData {
    password: string
}

export const usePasswordStrengthCheck = (localData: any) => {
    const strength = (): number => {
        const { password } = localData as LocalData
        const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/
        if (regex.test(password)) {
            return 5
        } else if (password.length >= 10) {
            return 4
        } else if (/[A-Z]/.test(password)) {
            return 3
        } else if (/[a-z]/.test(password)) {
            return 2
        } else if (/[0-9]/.test(password)) {
            return 1
        } else {
            return 0
        }
    }

    const containerClassName = (): PasswordStrengthCheckResult['containerClassName'] => {
        const strengthScore = strength()
        if (strengthScore === 0) {
            return 'null'
        } else if (strengthScore >= 1 && strengthScore <= 2) {
            return 'weak'
        } else if (strengthScore >= 3 && strengthScore <= 4) {
            return 'medium'
        } else {
            return 'strong'
        }
    }

    return { containerClassName }
}
